import React from 'react'
import styled from 'styled-components'

import ReactLogo from './tools/react.inline.svg'
import TypescriptLogo from './tools/typescript.inline.svg'
import ReduxLogo from './tools/redux.inline.svg'
import D3Logo from './tools/d3.inline.svg'
import NodeJSLogo from './tools/nodejs.inline.svg'
import MongoDBLogo from './tools/mongodb.inline.svg'
import JestLogo from './tools/jest.inline.svg'
import ESLintLogo from './tools/eslint.inline.svg'
import WebpackLogo from './tools/webpack.inline.svg'
import VSLogo from './tools/visual-studio.inline.svg'

import { media } from '../../styles/styleUtils'

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
`

const Icon = styled.div`
  width: 28px;
  margin-right: 16px;
  margin-top: 5px;

  filter: url("data:image/svg+xml;utf8,<svg version='1.1' xmlns='http://www.w3.org/2000/svg' height='0'><filter id='greyscale'><feColorMatrix type='matrix' values='0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0' /></filter></svg>#greyscale");
  :hover {
    filter: unset;
  }
  ${media.md`
    width: 24px;
  `}
  ${media.sm`
    width: 20px;

    margin-right: 12px;
  `}
`

const tools = [
  <ReactLogo key="React" />,
  <ReduxLogo key="Redux" />,
  <NodeJSLogo key="Node.js" />,
  <MongoDBLogo key="MongoDB" />,
  <D3Logo key="D3.js" />,
  <TypescriptLogo key="Typescript" />,
  <JestLogo key="Jest" />,
  <ESLintLogo key="eslint" />,
  <WebpackLogo key="Webpack" />,
  <VSLogo key="Visual Studio" />,
]

export default () => {
  return (
    <Wrapper>
      {/* <FilterImg alt="logo-signature" src={Typescript} /> */}
      {tools.map(tool => (
        <Icon>{tool}</Icon>
      ))}
    </Wrapper>
  )
}
