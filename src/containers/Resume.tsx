import React from 'react'
import styled from 'styled-components'

import { Title, Subtitle, Description } from '../components/Typography'
import Tools from './home/Tools'

import { media } from '../styles/styleUtils'

import Content from './resume/Content'

const Wrapper = styled.div`
  background: ${p => p.theme.palette.black};
  padding: 0 100px;
  width: 100%;
  min-height: 100vh;
  ${media.md`
    padding: 0 50px;
  `};
  ${media.sm`
    padding: 0 25px;
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

const Header = styled.div`
  margin-top: 200px;
  display: grid;
  grid-template-columns: 2fr 1fr;
  align-items: center;
  ${media.lg`
    grid-template-columns: 1fr;
    grid-gap: 40px;
  `}
  ${media.md`
    margin-top: 150px;
  `}
`

const Col = styled.div``

const Logos = styled.div`
  display: flex;
  margin-top: 12px;
`

const LogoWrapper = styled.a`
  margin-right: 20px;
  ${media.md`
      margin-right: 8px;
    `}
  svg {
    fill: ${p => p.theme.palette.white};
    height: 36px;
    :hover {
      fill: rgba(255, 255, 255, 0.75);
      cursor: pointer;
    }
    ${media.md`
      margin-right: 0;
      height: 21px;
    `}
  }
`

export default () => (
  <Wrapper>
    <Header>
      <Col>
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
        <Tools />
      </Col>
      <Col>
        <Subtitle>kasper@gnonce.com</Subtitle>
        <Logos>
          <LogoWrapper
            aria-label="Checkout my GitHub"
            href="https://github.com/kajumito/"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
              <path d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z" />
            </svg>
          </LogoWrapper>
          <LogoWrapper
            aria-label="Connect with me in LinkedIn"
            href="https://www.linkedin.com/in/kasper-tontti/"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </LogoWrapper>
        </Logos>
      </Col>
    </Header>
    <Content />
  </Wrapper>
)
