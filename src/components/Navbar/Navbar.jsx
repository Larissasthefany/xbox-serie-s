import { useState } from 'react'
import { Link } from "react-router-dom"
import XboxLogo from '../../../public/img/xbox (1).png'
import './navbar.css'

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)
    return (
        <nav>
            <Link to="/">
                <img src={XboxLogo} alt="Logotipo do Xbox" />
            </Link>
            <div className="menu" onClick={() => {
                setMenuOpen(!menuOpen)
            }}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={menuOpen ? "open" : ""}>
                <li key="voltar"><Link to="/">Home</Link></li>
                <li key="jogos"><Link to="/jogos">jogos</Link></li>
                <li key="galeria"><Link to="/galeria">galeria</Link></li>
                <li key="unbox"><Link to="/unbox">unbox</Link></li>
                <li key="btn"><Link to="/disponibilidade" className="btn">Ver Disponibilidade</Link></li>
            </ul>
        </nav>
    )
}