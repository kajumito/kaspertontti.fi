import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import WebGL from './home/WebGL'

import { Title, Subtitle, Description } from '../components/Typography'
import Tools from './home/Tools'

import { media } from '../styles/styleUtils'

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 0 100px;
  background: ${p => p.theme.palette.black};
  ${media.md`
    padding: 0 50px;
  `};
  ${media.md`
    padding: 0 25px;
  `};
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 50%;
  ${media.xl`
    flex-basis: 55%;
  `};
  ${media.lg`
    flex-basis: 100%;
  `};
`

const JobTitle = styled.p`
  color: white;
  margin: 0 0 5px 0;
`

const Underline = styled.span`
  cursor: default;
  background: rgba(255, 255, 255, 0.2);
  position: relative;
  :hover span {
    visibility: visible;
    opacity: 1;
  }
`

const Tooltip = styled.span`
  position: absolute;
  z-index: 1;
  top: ${(p: { top?: number; width?: number }) =>
    p.top ? `${p.top}px` : '32px'};
  font-size: 12px;
  background: #333;
  padding: 10px;
  width: ${p => (p.width ? `${p.width}px` : '200px')};
  left: 50%;
  margin-left: ${p => (p.width ? `${-p.width / 2}px` : '-100px')};
  text-align: center;
  line-height: 16px;
  font-size: 12px;
  color: white;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.2s;
  ::after {
    content: ' ';
    position: absolute;
    bottom: 100%;
    left: 50%;
    border-width: 5px;
    border-style: solid;
    border-color: transparent transparent #333 transparent;
  }
  ${media.sm`
    width: auto;
  `}
`

const Contact = styled.span``

const WebGLWrapper = styled.div`
  width: 40vw;
  height: 40vw;
  position: relative;
  ${media.xl`
    width: 35vw;
    height: 35vw;
  `}
`

export default () => {
  const [windowSize, setWindowSize] = useState(window.innerWidth)
  useEffect(() => {
    const handleResize = () => setWindowSize(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <Wrapper>
      <Content>
        <Title>Kasper Tontti</Title>
        <Subtitle>Software Engineer & Designer</Subtitle>
        <JobTitle>
          Co-Founder at{' '}
          <Underline>
            <Tooltip top={28}>
              Helping companies to evolve their business processes and models
              with information technology.
            </Tooltip>
            Gnonce
          </Underline>
        </JobTitle>
        <Description>
          Pretty good at coding stuff for{' '}
          <Underline key="intro-underline">
            {' '}
            <Tooltip width={250}>
              Everything I design and develop aims to provide smooth experience
              for the user.
            </Tooltip>
            human beings.
          </Underline>{' '}
          Fullstack software engineer with comprehensive knowledge of modern web
          technologies.{' '}
          <Underline>
            <Tooltip width={300}>
              I believe in human to human interaction. Don't be afraid to
              contact me, and we can get to know each other.
              <br />
              <Contact>📨kasper@gnonce.com</Contact>
            </Tooltip>
            Get to know me better!
          </Underline>
        </Description>
        <Tools />
      </Content>
      {windowSize > 1023 && (
        <WebGLWrapper>
          <WebGL windowSize={windowSize} />
        </WebGLWrapper>
      )}
    </Wrapper>
  )
}
