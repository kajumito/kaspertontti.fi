import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import Signature from './header/signature.svg'

import { media } from '../styles/styleUtils'

const Wrapper = styled(Link)`
  width: 100%;
  z-index: 1;
  position: absolute;
  display: flex;
  padding-top: 50px;
  padding-left: 100px;
  img {
    height: 48px;
  }
  ${media.md`
    padding-left: 25px;
  `}
`

export default () => (
  <Wrapper to="/">
    <img alt="logo-signature" src={Signature} />
  </Wrapper>
)
