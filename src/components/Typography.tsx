import styled from 'styled-components'
import { media } from '../styles/styleUtils'

export const Title = styled.h1`
  color: white;
  font-size: 48px;
  font-weight: 700;
  letter-spacing: -1px;
  margin: 0;
  ${media.xl`
    font-size: 38px;
  `}
  ${media.md`
    font-size: 32px;
  `}
`

export const Subtitle = styled.h2`
  color: white;
  font-size: 24px;
  font-weight: 500;
  letter-spacing: -1px;
  margin: 0 0 10px 0;
  ${media.xl`
    font-size: 21px;
  `}
  ${media.md`
    font-size: 18px;
  `}
`

export const Description = styled.p`
  color: white;
  line-height: 24px;
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 10px;
  ${media.xl`
    font-size: 16px;
  `}
  ${media.sm`
    font-size: 14px;
    line-height: 21px;
  `}
`
