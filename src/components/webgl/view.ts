"use client";
import { Clock, PerspectiveCamera, Scene, WebGLRenderer } from "three";

import Particles from "./view/particles";

class View {
  currentImage?: number;
  fovHeight!: number;
  scene!: Scene;
  camera!: PerspectiveCamera;
  renderer!: WebGLRenderer;
  clock!: Clock;
  particles!: Particles;

  constructor() {
    this.initScene();
    this.initParticles();
  }

  initScene() {
    this.scene = new Scene();
    this.camera = new PerspectiveCamera(
      50,
      window.innerWidth / window.innerHeight,
      1,
      10000
    );
    this.camera.position.z = 300;
    this.renderer = new WebGLRenderer({ antialias: true, alpha: true });
    this.clock = new Clock(true);
  }

  initParticles() {
    this.particles = new Particles(this);
    this.particles.loadTexture("/square.png");
    this.scene.add(this.particles.container);
  }

  update() {
    const delta = this.clock.getDelta();
    if (this.particles) this.particles.update(delta);
  }

  draw() {
    this.renderer.render(this.scene, this.camera);
  }

  hideParticles() {
    if (this.particles) this.particles.hide();
  }

  resize(width: number, height: number) {
    if (!this.renderer) return;

    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();

    this.fovHeight =
      2 *
      Math.tan((this.camera.fov * Math.PI) / 180 / 2) *
      this.camera.position.z;

    this.renderer.setSize(width, height);

    if (this.particles) this.particles.resize();
  }
}

export default View;
