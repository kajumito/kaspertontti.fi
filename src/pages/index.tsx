import React, { Fragment /*lazy, Suspense*/ } from 'react'
import { graphql } from 'gatsby'

// Layout
import Layout from '../layout/index'

// View Containers
import Home from '../containers/Home'
// ReactDOMServer doesn't yet support Suspense
// const Home = lazy(() => {
//   return Promise.all([
//     import('../containers/Home'),
//     new Promise(resolve => setTimeout(resolve, 3500)),
//   ]).then(([moduleExports]) => moduleExports)
// })

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
    <Layout location={location}>
      <Fragment>
        {/* Suspense and lazy load not yet implemented for ReactDOMServer :( */}
        {/* <Suspense fallback={<Loading />}> */}
        <Loading />

        <Header />
        <Home />
        <Footer />
        {/* </Suspense> */}
      </Fragment>
    </Layout>
  )
}
