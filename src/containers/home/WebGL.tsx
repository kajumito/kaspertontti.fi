import React from 'react'
import styled from 'styled-components'

import View from './webgl/View'

const ThreeRoot = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
`

interface IWebGL {
  webglView: View
  threeRoot: HTMLDivElement
  raf: any
  handleAnimate: any
}

class WebGL extends React.Component<{}, {}, IWebGL> {
  componentDidMount() {
    this.initWebGLView()
    this.addListeners()
    this.animate()
    this.resize()
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resizeListenerContext)
  }

  resizeListenerContext = () => {
    this.resize()
  }

  initWebGLView() {
    this.webglView = new View()
    this.threeRoot.appendChild(this.webglView.renderer.domElement)
  }

  addListeners() {
    this.handleAnimate = this.animate.bind(this)
    window.addEventListener('resize', this.resizeListenerContext)
  }

  animate() {
    // if (scrollY < 200) this.webglView.initParticles()
    this.webglView.update()
    this.webglView.draw()
    this.raf = requestAnimationFrame(this.handleAnimate)
  }

  resize() {
    this.webglView.resize(
      this.threeRoot.offsetWidth,
      this.threeRoot.offsetHeight
    )
  }

  render() {
    return (
      <ThreeRoot
        ref={element => (this.threeRoot = element as HTMLDivElement)}
      />
    )
  }
}

export default WebGL
