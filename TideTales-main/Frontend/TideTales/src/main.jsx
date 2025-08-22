import React from 'react'
import ReactDOM from 'react-dom/client'
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Auth0Provider
    domain="dev-z2yi34ld63oonr6k.us.auth0.com"
    clientId="ZhsAy1JTWU49qtt4zZd8SnIG8kXfMOqn"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>,
  </React.StrictMode>,
)
