<template>
  <div class="home-page">
    <section class="hero-section">
      <div class="hero-content">
        <h1>Найдите свой идеальный дом</h1>
        <p>Профессиональный подход к выбору недвижимости</p>
        <div class="search-form">
          <InputText v-model="searchQuery" placeholder="Поиск по адресу, району или типу недвижимости" />
          <Button label="Найти" class="p-button-primary" />
        </div>
        <div class="quick-links">
          <Button label="Квартиры" class="p-button-text" />
          <Button label="Дома" class="p-button-text" />
          <Button label="Новостройки" class="p-button-text" />
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
      
      <div class="property-grid">
        <div class="property-card" v-for="(property, index) in properties" :key="index">
          <div class="property-image">
            <div class="image-placeholder">
              <i class="pi pi-image"></i>
            </div>
          </div>
          <div class="property-details">
            <h3 class="property-price">{{ formatPrice(property.price) }} ₽</h3>
            <div class="property-title">{{ property.title }}</div>
            <div class="property-address">{{ property.address }}</div>
            <div class="property-features">
              <span><i class="pi pi-home"></i> {{ property.area }} м²</span>
              <span><i class="pi pi-table"></i> {{ property.rooms }} комн.</span>
              <span><i class="pi pi-building"></i> {{ property.floor }}/{{ property.totalFloors }} эт.</span>
            </div>
          </div>
        </div>
      </div>
      
      <div class="view-all">
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

const properties = [
  {
    title: '3-комн. квартира, 75 м², 5/9 эт.',
    address: 'ул. Ленина, 123',
    price: 6500000,
    area: 75,
    rooms: 3,
    floor: 5,
    totalFloors: 9
  },
  {
    title: '2-комн. квартира, 54 м², 3/12 эт.',
    address: 'пр. Мира, 45',
    price: 4800000,
    area: 54,
    rooms: 2,
    floor: 3,
    totalFloors: 12
  },
  {
    title: '1-комн. квартира, 38 м², 2/5 эт.',
    address: 'ул. Гагарина, 78',
    price: 3200000,
    area: 38,
    rooms: 1,
    floor: 2,
    totalFloors: 5
  }
];

const formatPrice = (price: number): string => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
};
</script>

<style scoped>
.home-page {
  margin: 15px 0;
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
  margin-bottom: 1.5rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

.search-form .p-inputtext {
  width: 500px;
  height: 46px;
  border: 3px solid #e74c3c;
  border-right: none;
  border-radius: 4px 0 0 4px;
  padding: 10px 15px;
  background-color: #222;
  color: white;
}

.search-form .p-inputtext::placeholder {
  color: #cccccc;
  opacity: 0.8;
}

.search-form .p-button-primary {
  border-radius: 0 4px 4px 0;
  margin-left: 0;
}

.quick-links {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.features-section {
  padding: 3rem 1rem;
  background-color: #f5f7fa;
  text-align: center;
  border-radius: 1rem;
  margin-bottom: 3rem;
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

.property-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.property-card {
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.property-card:hover {
  transform: translateY(-5px);
}

.property-image {
  height: 200px;
  background-color: #f8f8f8;
}

.image-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.image-placeholder i {
  font-size: 3rem;
  color: #ddd;
}

.property-details {
  padding: 1.5rem;
}

.property-price {
  font-size: 1.25rem;
  font-weight: 700;
  color: #42b983;
  margin-bottom: 0.5rem;
}

.property-title {
  font-weight: 600;
  margin-bottom: 0.25rem;
}

.property-address {
  color: #666;
  margin-bottom: 1rem;
  font-size: 0.9rem;
}

.property-features {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  font-size: 0.9rem;
  color: #555;
}

.property-features span {
  display: flex;
  align-items: center;
  gap: 0.3rem;
}

.view-all {
  margin-top: 2rem;
}

.p-button-primary {
  background-color: #e74c3c;
  padding: 0.75rem 1.5rem;
  border-radius: 0 4px 4px 0;
  border: none;
}

.p-button-primary:hover {
  background-color: #c0392b !important;
}

@media (max-width: 768px) {
  .feature-cards {
    flex-direction: column;
    align-items: center;
  }
  
  .property-grid {
    grid-template-columns: 1fr;
  }
}
</style>