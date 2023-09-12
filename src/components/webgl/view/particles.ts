import { Power1, gsap } from "gsap";
import View from "../view";

import {
  BufferAttribute,
  InstancedBufferAttribute,
  InstancedBufferGeometry,
  Mesh,
  Object3D,
  RGBAFormat,
  RawShaderMaterial,
  Texture,
  TextureLoader,
  Vector2,
} from "three";

import fragmentShader from "./shaders/particle.frag";
import vertexShader from "./shaders/particle.vert";

const glslify = require("glslify");

class Particles {
  view: View;
  container: Object3D;
  objectMesh!: any;
  texture!: Texture;
  width!: number;
  height!: number;
  pixelAmount?: number;

  constructor(view: View) {
    this.view = view;
    this.container = new Object3D();
  }

  loadTexture(img: string) {
    const loader = new TextureLoader();
    loader.load(img, (texture) => {
      this.texture = texture;
      this.texture.format = RGBAFormat;
      this.width = texture.image.width;
      this.height = texture.image.height;

      this.drawPoints();
      this.resize();
      this.show();
    });
  }

  drawPoints() {
    this.pixelAmount = this.width * this.height;
    let visiblePixels = 0;

    const threshold = parseInt("22", 16);
    const img = this.texture.image;
    const canvas: HTMLCanvasElement = document.createElement("canvas");
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

    canvas.width = this.width;
    canvas.height = this.height;
    ctx.scale(1, -1);
    ctx.drawImage(img, 0, 0, this.width, this.height * -1);

    const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const originalColors = Float32Array.from(imgData.data);

    for (let i = 0; i < this.pixelAmount; i += 1) {
      if (originalColors[i * 4] > threshold) visiblePixels += 1;
    }

    const uniforms = {
      uTime: { value: 0 },
      uRandom: { value: 1.0 },
      uDepth: { value: 1.0 },
      uSize: { value: 0.0 },
      uTextureSize: { value: new Vector2(this.width, this.height) },
      uTexture: { value: this.texture },
    };

    const material = new RawShaderMaterial({
      uniforms,
      vertexShader: glslify(vertexShader),
      fragmentShader: glslify(fragmentShader),
      depthTest: false,
      transparent: true,
    });

    const geometry = new InstancedBufferGeometry();

    const positions = new BufferAttribute(new Float32Array(4 * 3), 3);
    positions.setXYZ(0, -0.5, 0.5, 0.0);
    positions.setXYZ(1, 0.5, 0.5, 0.0);
    positions.setXYZ(2, -0.5, -0.5, 0.0);
    positions.setXYZ(3, 0.5, -0.5, 0.0);
    geometry.setAttribute("position", positions);

    const uvs = new BufferAttribute(new Float32Array(4 * 2), 2);
    uvs.setXY(0, 0.0, 0.0);
    uvs.setXY(1, 1.0, 0.0);
    uvs.setXY(2, 0.0, 1.0);
    uvs.setXY(3, 1.0, 1.0);
    geometry.setAttribute("uv", uvs);

    geometry.setIndex(
      new BufferAttribute(new Uint16Array([0, 2, 1, 2, 3, 1]), 1)
    );
    const indices = new Uint16Array(visiblePixels);
    const offsets = new Float32Array(visiblePixels * 3);
    const angles = new Float32Array(visiblePixels);

    for (let i = 0, j = 0; i < this.pixelAmount; i += 1) {
      if (originalColors[i * 4 + 0] <= threshold) continue;

      offsets[j * 3 + 0] = i % this.width;
      offsets[j * 3 + 1] = Math.floor(i / this.width);

      indices[j] = i;

      angles[j] = Math.random() * Math.PI;

      j += 1;
    }

    geometry.setAttribute("pindex", new InstancedBufferAttribute(indices, 1));
    geometry.setAttribute("offset", new InstancedBufferAttribute(offsets, 3));
    geometry.setAttribute("angle", new InstancedBufferAttribute(angles, 1));

    this.objectMesh = new Mesh(geometry, material);
    this.container.add(this.objectMesh);
  }

  update(delta: number) {
    if (!this.objectMesh) return;
    this.objectMesh.material.uniforms.uTime.value += delta;
  }

  show(time = 1.0) {
    // reset
    gsap.fromTo(
      this.objectMesh.material.uniforms.uSize,
      time,
      { value: 0.01 },
      { value: 1.5 }
    );
    gsap.to(this.objectMesh.material.uniforms.uRandom, time, {
      value: 1.0,
    });
    gsap.fromTo(
      this.objectMesh.material.uniforms.uDepth,
      time * 1.5,
      { value: -40.0 },
      { value: 5.0 }
    );
  }

  hide(time = 0.5) {
    gsap.to(this.objectMesh.material.uniforms.uRandom, time, {
      value: 5.0,
      onComplete: () => {
        this.objectMesh.parent.remove(this.objectMesh);
        this.objectMesh.geometry.dispose();
        this.objectMesh.material.dispose();
        this.objectMesh = null;
      },
    });
    gsap.to(this.objectMesh.material.uniforms.uDepth, time, {
      value: 40.0,
      ease: Power1.easeIn,
    });
    gsap.to(this.objectMesh.material.uniforms.uSize, time * 1.2, {
      value: 0.0,
    });
  }

  resize() {
    if (!this.objectMesh) return;
    const scale = this.view.fovHeight / this.height;
    this.objectMesh.scale.set(scale, scale, 1);
  }
}

export default Particles;
