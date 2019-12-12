import React from 'react'
import Link from 'gatsby'
import Layout from '../components/layout'

const NotFoundPage = () => (
  <Layout>
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist.</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default NotFoundPage
