import React, { Fragment } from 'react'

import Layout from '../layout/index'

import Home from '../containers/Home'

import Loading from '../components/Loading'
import Header from '../components/Header'
import Footer from '../components/Footer'

interface IIndexPageProps {
  location: {
    pathname: string
  }
}

export default ({ location }: IIndexPageProps) => {
  return (
    <Layout location={location}>
      <Fragment>
        <Loading />
        <Header />
        <Home />
        <Footer />
      </Fragment>
    </Layout>
  )
}
