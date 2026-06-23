import React from 'react'
import '../styles/footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-social">
          <a href="https://vk.com" target="_blank" rel="noopener noreferrer" className="social-link">
            VK
          </a>
          <span className="social-divider">|</span>
          <a href="https://max.ru" target="_blank" rel="noopener noreferrer" className="social-link">
            MAX
          </a>
        </div>
        <div className="footer-copy">
          © 2026 СМР
        </div>
      </div>
    </footer>
  )
}

export default Footer