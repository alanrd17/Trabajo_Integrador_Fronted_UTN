import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { About, Contact, Home } from '../pages'

function App() {
    return (
    
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/sobre-nosotros/:productId" element={<About/>} />
            <Route path="/contacto" element={<Contact/>} />
        </Routes>
    
)
}

export default App