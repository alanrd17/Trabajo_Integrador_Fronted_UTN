import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, BrowserRouter as Router } from 'react-router-dom'
import App from './App/App.jsx'
import './styles/App.css'

ReactDOM.createDOM(document.getElementById('root')).render(
<BrowserRouter>
<App />
</BrowserRouter>
)
