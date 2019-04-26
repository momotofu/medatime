import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/seo'
import TimerScreen from '../components/TimerScreen'
import TimerProvider from '../components/Timer'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={['meditation', 'timer', 'meditation timer', 'medatime', 'gatsby', 'application', 'react']} />
    <TimerProvider>
      <TimerScreen />
    </TimerProvider>
  </Layout>
)

export default IndexPage
