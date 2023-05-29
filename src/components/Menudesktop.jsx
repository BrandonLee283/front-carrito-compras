import React from 'react'
import '../styles/menuDesktop.css'
import { useNavigate } from 'react-router-dom'

const Menudesktop = () => {
    const navigate = useNavigate();
    const ordenes = () =>{ navigate('/ordenes')}
    return (
        <div className="desktop-menu">
            <ul>
                <li>
                    <a href="/" onClick={ordenes}>My orders</a>
                </li>
                <li>
                    <a href="/" >My account</a>
                </li>
                <li>
                    <a href="/">Sign out</a>
                </li>
            </ul>
        </div>
    )
}

export default Menudesktop