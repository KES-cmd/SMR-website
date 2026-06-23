import React from 'react'
import CouncilCard from '../components/CouncilCard'
import '../styles/council.css'

function Council() {
  const councilData = [
    {
      id: 1,
      image: "/images/council1.jpg",
      name: "Анна Иванова",
      position: "Председатель Совета",
      description: "Руководит работой Совета, координирует деятельность всех направлений.",
      items: [
        { icon: "🎯", text: "Стратегическое планирование" },
        { icon: "📊", text: "Управление проектами" },
        { icon: "🤝", text: "Взаимодействие с партнерами" },
        { icon: "📈", text: "Развитие организации" }
      ]
    },
    {
      id: 2,
      image: "/images/council2.jpg",
      name: "Петр Смирнов",
      position: "Заместитель председателя",
      description: "Отвечает за операционную деятельность и реализацию стратегических задач.",
      items: [
        { icon: "⚙️", text: "Операционное управление" },
        { icon: "📋", text: "Контроль исполнения" },
        { icon: "🔄", text: "Оптимизация процессов" },
        { icon: "📝", text: "Документооборот" }
      ]
    },
    {
      id: 3,
      image: "/images/council3.jpg",
      name: "Елена Козлова",
      position: "Секретарь Совета",
      description: "Обеспечивает организационную работу Совета и документооборот.",
      items: [
        { icon: "📅", text: "Организация заседаний" },
        { icon: "📄", text: "Ведение документации" },
        { icon: "📨", text: "Деловая переписка" },
        { icon: "📁", text: "Архивирование материалов" }
      ]
    },
    {
      id: 4,
      image: "/images/council4.jpg",
      name: "Михаил Воронов",
      position: "Член Совета",
      description: "Курирует вопросы развития и инноваций в организации.",
      items: [
        { icon: "💡", text: "Инновационные проекты" },
        { icon: "🔬", text: "Исследования и разработки" },
        { icon: "📚", text: "Обучение сотрудников" },
        { icon: "🌐", text: "Внедрение новых технологий" }
      ]
    },
    {
      id: 5,
      image: "/images/council5.jpg",
      name: "Ольга Морозова",
      position: "Член Совета",
      description: "Занимается вопросами финансового планирования и контроля.",
      items: [
        { icon: "💰", text: "Финансовое планирование" },
        { icon: "📊", text: "Бюджетирование" },
        { icon: "📈", text: "Финансовый анализ" },
        { icon: "🔒", text: "Контроль затрат" }
      ]
    },
    {
      id: 6,
      image: "/images/council6.jpg",
      name: "Дмитрий Лебедев",
      position: "Член Совета",
      description: "Курирует направления внешних коммуникаций и связей с общественностью.",
      items: [
        { icon: "📢", text: "PR и коммуникации" },
        { icon: "🌍", text: "Связи с общественностью" },
        { icon: "📱", text: "Медиа-стратегия" },
        { icon: "🤝", text: "Партнерские отношения" }
      ]
    }
  ]

  return (
    <div className="council-page">
      <h1 className="page-title">Совет СМР</h1>
      <p className="page-subtitle">
        Узнайте больше о членах нашего Совета, их ролях и направлениях работы
      </p>
      
      <div className="council-grid">
        {councilData.map((member) => (
          <CouncilCard
            key={member.id}
            image={member.image}
            name={member.name}
            position={member.position}
            description={member.description}
            items={member.items}
          />
        ))}
      </div>
    </div>
  )
}

export default Council