import React from 'react'
import GalleryItem from '../components/GalleryItem'
import '../styles/Home.css'

function Home() {
  const galleryData = [
    {
      id: 1,
      image: "/images/photo1.jpg",
      title: "Название проекта 1",
      description: "Описание работы. Здесь можно рассказать о проекте, его целях и результатах.",
      align: "right"
    },
    {
      id: 2,
      image: "/images/photo2.jpg",
      title: "Название проекта 2",
      description: "Описание работы. Здесь можно рассказать о проекте, его целях и результатах.",
      align: "left"
    },
    {
      id: 3,
      image: "/images/photo3.jpg",
      title: "Название проекта 3",
      description: "Описание работы. Здесь можно рассказать о проекте, его целях и результатах.",
      align: "right"
    },
    {
      id: 4,
      image: "/images/photo4.jpg",
      title: "Название проекта 4",
      description: "Описание работы. Здесь можно рассказать о проекте, его целях и результатах.",
      align: "left"
    },
    {
      id: 5,
      image: "/images/photo5.jpg",
      title: "Название проекта 5",
      description: "Описание работы. Здесь можно рассказать о проекте, его целях и результатах.",
      align: "right"
    },
    {
      id: 6,
      image: "/images/photo6.jpg",
      title: "Название проекта 6",
      description: "Описание работы. Здесь можно рассказать о проекте, его целях и результатах.",
      align: "left"
    }
  ]

  return (
    <div className="home-page">
      <h1 className="page-title">Наши проекты</h1>
      <div className="gallery-grid">
        {galleryData.map((item) => (
          <GalleryItem
            key={item.id}
            image={item.image}
            title={item.title}
            description={item.description}
            align={item.align}
          />
        ))}
      </div>
    </div>
  )
}

export default Home