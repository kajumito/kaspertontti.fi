import React, { Fragment } from 'react'

// Layout
import Layout from '../layout/index'

// View Containers
import Resume from '../containers/Resume'

// Components
import Loading from '../components/Loading'
import Header from '../components/Header'

interface IndexPageProps {
  location: {
    pathname: string
  }
}

export default ({ location }: IndexPageProps) => {
  return (
    <Layout location={location}>
      <Fragment>
        <Loading/>
        <Header />
        <Resume />
      </Fragment>
    </Layout>
  )
}
