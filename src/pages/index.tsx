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
  const alreadyLoaded = typeof window !== 'undefined' && window.sessionStorage.getItem('signature-load')
  return (
    <Layout location={location}>
      <Fragment>
        {!alreadyLoaded && <Loading/>}
        <Header />
        <Home />
        <Footer />
      </Fragment>
    </Layout>
  )
}
