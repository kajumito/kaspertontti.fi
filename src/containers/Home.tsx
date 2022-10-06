import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import WebGL from './home/WebGL'

import { Title, Subtitle, Description } from '../components/Typography'

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

const WebGLWrapper = styled.div`
  width: 40vw;
  height: 40vw;
  position: relative;
  ${media.xl`
    width: 35vw;
    height: 35vw;
  `}
`

const Underline = styled.a`
  cursor: default;
  background: rgba(255, 255, 255, 0.2);
  position: relative;
  text-decoration: none;
  color: white;
  cursor: pointer;
  margin-right: 4px;
  :hover span {
    visibility: visible;
    opacity: 1;
  }
`

const StyledLink = styled(Link)`
  color: white;
  font-size: 21px;
  margin-top: 16px;
`

export default () => {
  const [windowSize, setWindowSize] = useState(0)
  if (typeof window !== `undefined`) {
    useEffect(() => {
      const handleResize = () => setWindowSize(window.innerWidth)
      handleResize()
      window.addEventListener('resize', handleResize)
      return () => {
        window.removeEventListener('resize', handleResize)
      }
    }, [])
  }

  return (
    <Wrapper>
      <Content>
        <Title>Kasper Tontti</Title>
        <Subtitle>Software Engineer & Designer</Subtitle>
        <Description>
          Experienced software engineer and entrepreneur with a deep
          understanding of modern web technologies and user-centric software
          design.
        </Description>
        <Description>
          <Underline href="https://gnonce.com" target="_blank">
            @gnonce
          </Underline>
          <Underline href="https://metaspace.fi" target="_blank">
            @metaspace
          </Underline>
          <Underline href="https://eventpal.app" target="_blank">
            @eventpal
          </Underline>
        </Description>
        <Description>
          <b>always building.</b>
        </Description>
        {/* <StyledLink to="/cv">See my resume &rarr;</StyledLink> */}
      </Content>
      {windowSize > 1023 && (
        <WebGLWrapper>
          <WebGL windowSize={windowSize} />
        </WebGLWrapper>
      )}
    </Wrapper>
  )
}
