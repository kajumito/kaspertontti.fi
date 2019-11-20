import * as React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

// Layout
import { Link } from 'gatsby'
import Layout from '../layout/index'

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background: #222;
`

const ErrorInformation = styled.div`
  display: flex;
  align-items: center;
`

const Text = styled.h1`
  color: white;
  font-weight: 400;
  font-size: 24px;
  margin-left: 10px;
`

const Number = styled.h2`
  color: white;
  padding-right: 10px;
  border-right: 1px solid white;
`

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 14px;
`

export default ({ location }: IndexPageProps) => {
  return (
    <Layout location={location}>
      <Wrapper>
        <ErrorInformation>
          <Number>404</Number>
          <Text>Page not found!</Text>
        </ErrorInformation>
        <StyledLink to="/">👈 Back to homepage </StyledLink>
      </Wrapper>
    </Layout>
  )
}
