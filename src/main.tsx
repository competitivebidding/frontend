import React from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter } from 'react-router-dom'
import { ApolloProvider } from '@apollo/client'

import App from './app/App'
import client from './shared/lib/server/client.js'

import './shared/lib/i18n/i18n'

ReactDOM.createRoot(document.getElementById('root') as HTMLDivElement).render(
    <ApolloProvider client={client}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ApolloProvider>
)
