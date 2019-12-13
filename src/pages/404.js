import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const NotFoundPage = () => (
  <Layout>
    <h1>Não Encontrado</h1>
    <p>Chegou a uma página que não existe</p>
    <Link to="/">Voltar à homepage</Link>
  </Layout>
)

export default NotFoundPage
