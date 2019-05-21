import styled from 'styled-components'
import { media } from '../styles/styleUtils'

export const Title = styled.h1`
  color: white;
  font-size: 72px;
  font-weight: 700;
  letter-spacing: -1px;
  margin: 0;
  ${media.xl`
    font-size: 62px;
  `}
  ${media.md`
    font-size: 42px;
  `}
  ${media.sm`
    font-size: 36px;
  `}
`

export const Subtitle = styled.h2`
  color: white;
  font-size: 36px;
  font-weight: 500;
  letter-spacing: -1px;
  margin: 0 0 10px 0;
  ${media.xl`
    font-size: 31px;
  `}
  ${media.md`
    font-size: 26px;
  `}
  ${media.sm`
    font-size: 21px;
  `}
`

export const Description = styled.p`
  color: white;
  line-height: 32px;
  font-size: 21px;
  font-weight: 400;
  margin: 10px 0;
  ${media.xl`
    font-size: 18px;
    line-height: 28px;

  `}
  ${media.md`
    font-size: 16px;
    line-height: 26px;
  `}
  ${media.sm`
    font-size: 14px;
    line-height: 24px;
  `}
`
