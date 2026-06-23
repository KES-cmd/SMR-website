import React from 'react'
import '../styles/header.css'

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-logo">
          <img 
            src="/images/globe.png" 
            alt="СМР" 
            className="globe-icon"
          />
        </div>

        <nav className="header-nav">
          <a href="/" className="nav-link">Новости</a>
          <a href="/council" className="nav-link">Совет</a>
          <a href="/about" className="nav-link">О СМР</a>
        </nav>

        <div className="header-actions">
          <button className="join-btn">Присоединиться</button>
        </div>
      </div>
    </header>
  )
}

export default Header