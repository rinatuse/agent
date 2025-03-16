<template>
  <div class="home-page">
    <section class="hero-section">
      <div class="hero-content">
        <h1>Найдите свой идеальный дом</h1>
        <p>Профессиональный подход к выбору недвижимости</p>
        <div class="search-form">
          <span class="p-input-icon-left">
            <i class="pi pi-search" />
            <InputText v-model="searchQuery" placeholder="Начните поиск..." />
          </span>
          <Button label="Найти" class="p-button-primary" />
        </div>
      </div>
    </section>

    <section class="features-section">
      <h2>Почему выбирают нас</h2>
      <div class="feature-cards">
        <div class="feature-card">
          <i class="pi pi-check-circle feature-icon"></i>
          <h3>Большой выбор объектов</h3>
          <p>Более 1000 предложений недвижимости в базе</p>
        </div>
        <div class="feature-card">
          <i class="pi pi-user feature-icon"></i>
          <h3>Опытные специалисты</h3>
          <p>Риелторы с проверенной репутацией и опытом работы</p>
        </div>
        <div class="feature-card">
          <i class="pi pi-shield feature-icon"></i>
          <h3>Юридическая защита</h3>
          <p>Полное сопровождение сделки и проверка документов</p>
        </div>
      </div>
    </section>

    <section class="featured-properties">
      <h2>Популярные предложения</h2>
      <p>Ознакомьтесь с самыми популярными объектами недвижимости этого месяца</p>
      
      <!-- Здесь будет карусель с объектами недвижимости -->
      <div class="property-placeholder">
        <p>Здесь будут отображаться популярные объекты недвижимости</p>
        <Button label="Смотреть все предложения" class="p-button-outlined" />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';

const searchQuery = ref('');
</script>

<style scoped>
.home-page {
  margin: 15px  0;
}
.hero-section {
  background-size: cover;
  background-position: center;
  color: rgb(255, 255, 255);
  padding: 6rem 2rem;
  text-align: center;
  margin-bottom: 3rem;
  border-radius: 1rem;
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
}

.hero-content h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.hero-content p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
}

.search-form {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
}

.search-form .p-inputtext {
  width: 300px;
}

.features-section {
  padding: 3rem 1rem;
  background-color: #f5f7fa;
  text-align: center;
  border-radius: 1rem;
}

.features-section h2 {
  margin-bottom: 2rem;
  font-size: 2rem;
}

.feature-cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
}

.feature-card {
  background-color: white;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 300px;
  text-align: center;
}

.feature-icon {
  font-size: 2.5rem;
  color: #42b983;
  margin-bottom: 1rem;
}

.featured-properties {
  padding: 3rem 1rem;
  text-align: center;
}

.featured-properties h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.featured-properties > p {
  margin-bottom: 2rem;
  color: #666;
}

.property-placeholder {
  background-color: #f8f9fa;
  padding: 3rem;
  border-radius: 8px;
  margin-top: 2rem;
}

.p-button-primary {
  background-color: #e74c3c;
  padding: 15px 50px;
  border-radius: 1rem;
}
</style>