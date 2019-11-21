import React, { Fragment } from 'react'
import { graphql } from 'gatsby'

// Layout
import Layout from '../layout/index'

// View Containers
import Home from '../containers/Home'

// Components
import Loading from '../components/Loading'
import Header from '../components/Header'
import Footer from '../components/Footer'

interface IndexPageProps {
  location: {
    pathname: string
  }
}

export default ({ location }: IndexPageProps) => {
  return (
    <Layout noChat={false} location={location}>
      <Fragment>
        <Loading />

        <Header />
        <Home />
        <Footer />
      </Fragment>
    </Layout>
  )
}
