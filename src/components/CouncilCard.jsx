import React from 'react'
import '../styles/councilcard.css'

function CouncilCard({ image, name, position, description, items }) {
  return (
    <div className="council-card">
      <div className="council-card-inner">
        {/* Фото по центру */}
        <div className="council-photo">
          <img src={image} alt={name} />
        </div>

        {/* Текст вокруг фото */}
        <div className="council-info">
          <div className="council-name">{name}</div>
          <div className="council-position">{position}</div>
          <div className="council-description">{description}</div>
          
          {/* Прямоугольники с текстом */}
          <div className="council-items">
            {items.map((item, index) => (
              <div key={index} className="council-item">
                <span className="item-icon">{item.icon || '▸'}</span>
                <span className="item-text">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CouncilCard