import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Container from '../components/container'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={['meditation', 'timer', 'meditation timer', 'medatime', 'gatsby', 'application', 'react']} />
    <Container />
  </Layout>
)

export default IndexPage
