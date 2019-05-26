import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import GatsbyImage from 'gatsby-image'

import CloseWindowIcon from './header/close.inline.svg'

const Wrapper = styled.div`
  background: #333333;
  color: #fff;
  height: 64px;
  border-radius: 10px 10px 0 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-shrink: 0;
  padding: 0 24px;
`

const Profile = styled.div`
  display: flex;
  align-items: center;
`

const Name = styled.p`
  font-weight: 400;
  margin: 0;
  margin-left: 20px;
`

const Close = styled.div`
  justify-self: flex-end;
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    background: #444444;
  }
`

const CloseIcon = styled(CloseWindowIcon)`
  width: 16px;
`

export default ({ data, setChatHandler }: IChatProps) => {
  return (
    <Wrapper>
      <Profile>
        <StaticQuery
          query={ChatHeaderQuery}
          render={({ servantImage }) => (
            <GatsbyImage fixed={servantImage.childImageSharp.fixed} />
          )}
        />
        <Name>Toby the Cat</Name>
      </Profile>
      <Close onClick={() => setChatHandler(false)}>
        <CloseIcon />
      </Close>
    </Wrapper>
  )
}

const ChatHeaderQuery = graphql`
  query ChatHeaderQuery {
    servantImage: file(relativePath: { eq: "cat-servant.png" }) {
      childImageSharp {
        fixed(width: 42) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
