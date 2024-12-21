import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <>
    
    <nav className="navbar navbar-expand-lg bg-body-tertiary p-3 nav">
        <div className="container">
            <Link className="navbar-brand text-light fw-bold fs-4" to={'/'}>START BOOTSTRAP</Link>
            <div className="" id="navbarNavAltMarkup">
                <div className="navbar-nav d-flex gap-4">
                    <Link className="nav-link fw-bold text-light" to={'/portfolio'}>PORTFOLIO</Link>
                    <Link className="nav-link fw-bold text-light" to={'/about'}>ABOUT</Link>
                    <Link className="nav-link fw-bold text-light" to={'/contact'}>CONTACT</Link>
                </div>
            </div>
        </div>
    </nav>

    </>
  )
}
