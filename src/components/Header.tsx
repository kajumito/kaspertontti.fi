import React from 'react'
import styled from 'styled-components'

import Signature from './header/signature.svg'

import { media } from '../styles/styleUtils'

const Wrapper = styled.div`
  width: 100%;
  z-index: 1;
  position: absolute;
  display: flex;
  padding: 50px 100px 100px 100px;
  img {
    height: 48px;
  }
  ${media.md`
    padding: 50px 50px 100px 50px;
  `}
  ${media.sm`
    padding: 50px 25px 100px 25px;
  `}
`

export default () => (
  <Wrapper>
    <img alt="logo-signature" src={Signature} />
  </Wrapper>
)
