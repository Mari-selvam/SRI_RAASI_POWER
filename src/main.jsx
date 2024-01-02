import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Nav from './nav.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

container = document.getElementById("nav")
root = ReactDOM.createRoot(container);
root.render(
<React.StrictMode><Nav/></React.StrictMode>,)

