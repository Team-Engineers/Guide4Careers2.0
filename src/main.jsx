import React from 'react'
import { GoogleOAuthProvider } from "@react-oauth/google";
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <GoogleOAuthProvider clientId="853968550992-5g0mecja3kfdad87ds4sdilpv1r2ub2k.apps.googleusercontent.com">

    <App />
    </GoogleOAuthProvider>

  </React.StrictMode>,
)
