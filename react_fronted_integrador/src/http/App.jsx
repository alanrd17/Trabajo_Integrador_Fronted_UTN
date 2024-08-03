import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import {PaginaInicio} from './paginas/PaginaInicio'
import {PaginaOpiniones} from './paginas/PaginaOpiniones'
import {PaginaNoEncontrada} from './paginas/PaginaNoEncontrada'

function App() {
    return (
        <Router>
            <div className="container">
                <header className="header">
                    <h1>Literatura Viajera</h1>
                </header>
                <main className="main-content">
                    <Routes>
                        <Route path="/" element={<PaginaInicio />} />
                        <Route path="/opiniones" element={<PaginaOpiniones />} />
                        <Route path="*" element={<PaginaNoEncontrada />} />
                    </Routes>
                </main>
                <footer className="footer">
                    <p>&copy; 2024 Literatura Ambulante</p>
                </footer>
            </div>
        </Router>
    )
}

export default App