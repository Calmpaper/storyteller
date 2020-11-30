import React from 'react'
import ReactDOM from 'react-dom'
import reportWebVitals from './misc/reportWebVitals'
import './assets/css/index.css'

import Providers from 'providers'
import Routes from 'routes'
import Layout from 'components/Layout'

const App = () => (
  <Providers>
    <Layout>
      <Routes />
    </Layout>
  </Providers>
)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
