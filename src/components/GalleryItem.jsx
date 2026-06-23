import React from 'react'
import '../styles/GalleryItem.css'

function GalleryItem({ image, title, description, align }) {
  return (
    <div className={`gallery-item ${align}`}>
      <div className="gallery-image">
        <img src={image} alt={title} />
      </div>
      <div className="gallery-text">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default GalleryItem