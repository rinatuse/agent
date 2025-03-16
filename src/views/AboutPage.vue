<template>
    <div class="about-page">
      <h1>О нашей компании</h1>
      <div class="about-content">
        <div class="about-section">
          <h2>Кто мы</h2>
          <p>Агентство недвижимости "ДомЭксперт" - ваш надежный партнер на рынке недвижимости. Мы предоставляем полный спектр услуг по покупке, продаже и аренде недвижимости с 2010 года.</p>
          <p>За это время мы помогли более 5000 клиентам найти идеальный дом и успешно заключить выгодные сделки.</p>
        </div>
        
        <div class="about-section">
          <h2>Наша миссия</h2>
          <p>Мы стремимся сделать процесс покупки, продажи и аренды недвижимости простым, безопасным и прозрачным для каждого клиента.</p>
          <p>Наша цель - не просто продать недвижимость, а найти оптимальное решение для каждого клиента, учитывая его индивидуальные потребности и пожелания.</p>
        </div>
        
        <div class="about-section">
          <h2>Почему нам доверяют</h2>
          <ul class="advantages-list">
            <li>
              <i class="pi pi-check-circle"></i>
              <div>
                <h3>Опыт и профессионализм</h3>
                <p>Наши специалисты имеют многолетний опыт работы на рынке недвижимости и регулярно повышают свою квалификацию.</p>
              </div>
            </li>
            <li>
              <i class="pi pi-check-circle"></i>
              <div>
                <h3>Индивидуальный подход</h3>
                <p>Мы учитываем все ваши пожелания и предлагаем решения, максимально соответствующие вашим потребностям.</p>
              </div>
            </li>
            <li>
              <i class="pi pi-check-circle"></i>
              <div>
                <h3>Юридическая безопасность</h3>
                <p>Мы обеспечиваем полное юридическое сопровождение сделки и гарантируем ее законность и прозрачность.</p>
              </div>
            </li>
            <li>
              <i class="pi pi-check-circle"></i>
              <div>
                <h3>Обширная база объектов</h3>
                <p>В нашей базе более 1000 объектов недвижимости, среди которых вы обязательно найдете то, что искали.</p>
              </div>
            </li>
          </ul>
        </div>
        
        <div class="about-section">
          <h2>Наша команда</h2>
          <div class="team-placeholder">
            <p>Здесь будут представлены члены нашей команды</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  // Здесь может быть логика компонента
  </script>
  
  <style scoped>
  .about-page {
    padding: 1rem;
  }
  
  .about-page h1 {
    margin-bottom: 2rem;
    text-align: center;
  }
  
  .about-content {
    max-width: 1000px;
    margin: 0 auto;
  }
  
  .about-section {
    margin-bottom: 3rem;
  }
  
  .about-section h2 {
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
    color: var(--secondary-color);
    border-bottom: 2px solid var(--primary-color);
    padding-bottom: 0.5rem;
  }
  
  .advantages-list {
    list-style: none;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    gap: 2rem;
  }
  
  .advantages-list li {
    display: flex;
    gap: 1rem;
    align-items: flex-start;
  }
  
  .advantages-list i {
    font-size: 1.5rem;
    color: var(--primary-color);
    flex-shrink: 0;
    margin-top: 0.25rem;
  }
  
  .advantages-list h3 {
    margin-bottom: 0.5rem;
    font-size: 1.2rem;
  }
  
  .team-placeholder {
    background-color: var(--light-grey);
    padding: 3rem;
    border-radius: 8px;
    text-align: center;
  }
  
  @media (max-width: 768px) {
    .advantages-list {
      grid-template-columns: 1fr;
    }
  }
  </style>