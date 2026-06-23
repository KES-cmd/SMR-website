import React, { useState } from 'react'
import '../styles/FAQItem.css'

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={`faq-item ${isOpen ? 'open' : ''}`}>
      <div className="faq-question" onClick={() => setIsOpen(!isOpen)}>
        <span className="faq-text">{question}</span>
        <span className="faq-icon">{isOpen ? '−' : '+'}</span>
      </div>
      {isOpen && (
        <div className="faq-answer">
          <p>{answer}</p>
        </div>
      )}
    </div>
  )
}

export default FAQItem