import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { QueryClientProvider } from '@tanstack/react-query'
import { ClientQuery } from './config/cuery-client/query-client.js'
import { store } from './redux/Store.js'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider store={store}>
      <QueryClientProvider client={ClientQuery}>
        <App />
      </QueryClientProvider>
    </Provider>
  </BrowserRouter>
)
