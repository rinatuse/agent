<template>
  <div class="property-detail">
    <div class="property-header">
      <div class="property-titles">
        <h1>{{ property.title }}</h1>
        <p class="property-address">{{ property.address }}</p>
      </div>
      <div class="property-price">
        <h2>{{ formatPrice(property.price) }} ₽</h2>
        <p v-if="property.pricePerMeter">{{ formatPrice(property.pricePerMeter) }} ₽/м²</p>
      </div>
    </div>

    <div class="property-gallery">
      <div class="main-image-placeholder">
        <p>Основное изображение объекта недвижимости</p>
      </div>
      <div class="thumbnail-images">
        <div class="thumbnail-placeholder" v-for="n in 4" :key="n">
          <p>Миниатюра {{ n }}</p>
        </div>
      </div>
    </div>

    <div class="property-content">
      <div class="property-details">
        <div class="detail-highlights">
          <div class="highlight">
            <i class="pi pi-home"></i>
            <span>{{ property.area }} м²</span>
          </div>
          <div class="highlight">
            <i class="pi pi-table"></i>
            <span>{{ property.rooms }} комн.</span>
          </div>
          <div class="highlight">
            <i class="pi pi-building"></i>
            <span>{{ property.floor }}/{{ property.totalFloors }} этаж</span>
          </div>
        </div>

        <div class="description-section">
          <h3>Описание</h3>
          <p>{{ property.description }}</p>
        </div>

        <div class="characteristics-section">
          <h3>Характеристики</h3>
          <div class="characteristics-grid">
            <div class="characteristic-item" v-for="(value, key) in property.characteristics" :key="key">
              <span class="characteristic-name">{{ characteristicLabels[key] || key }}</span>
              <span class="characteristic-value">{{ value }}</span>
            </div>
          </div>
        </div>

        <div class="location-section">
          <h3>Расположение</h3>
          <div class="map-placeholder">
            <p>Здесь будет карта с расположением объекта</p>
          </div>
        </div>
      </div>

      <div class="property-sidebar">
        <div class="agent-card">
          <h3>Ваш агент</h3>
          <div class="agent-info">
            <div class="agent-avatar-placeholder">
              <i class="pi pi-user"></i>
            </div>
            <div class="agent-details">
              <p class="agent-name">{{ property.agent.name }}</p>
              <p class="agent-position">Агент по недвижимости</p>
              <p class="agent-contacts">
                <i class="pi pi-phone"></i> {{ property.agent.phone }}
              </p>
            </div>
          </div>
          <Button label="Связаться с агентом" icon="pi pi-envelope" class="p-button-primary" />
        </div>

        <div class="inquiry-form">
          <h3>Оставить заявку</h3>
          <div class="p-field">
            <label for="name">Ваше имя</label>
            <InputText id="name" v-model="inquiryForm.name" class="w-full" />
          </div>
          <div class="p-field">
            <label for="phone">Телефон</label>
            <InputText id="phone" v-model="inquiryForm.phone" class="w-full" />
          </div>
          <div class="p-field">
            <label for="message">Сообщение</label>
            <Textarea id="message" v-model="inquiryForm.message" rows="3" class="w-full" />
          </div>
          <Button label="Отправить заявку" icon="pi pi-send" class="p-button-primary w-full" @click="submitInquiry" />
        </div>
      </div>
    </div>

    <div class="similar-properties">
      <h3>Похожие предложения</h3>
      <div class="similar-properties-placeholder">
        <p>Здесь будут отображаться похожие объекты недвижимости</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
import { useRoute } from 'vue-router';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';

const route = useRoute();
const propertyId = route.params.id;

// Форматирование цены
const formatPrice = (price: number): string => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
};

// Лейблы для характеристик
const characteristicLabels: Record<string, string> = {
  buildingType: 'Тип дома',
  yearBuilt: 'Год постройки',
  ceilingHeight: 'Высота потолков',
  balcony: 'Балкон/лоджия',
  bathroom: 'Санузел',
  repair: 'Ремонт',
  parking: 'Парковка',
};

// Временные данные объекта недвижимости (будет заменено данными с бэкенда)
const property = reactive({
  id: propertyId,
  title: 'Просторная 3-комнатная квартира с видом на парк',
  address: 'Москва, ул. Ленина, 123, кв. 45',
  price: 12500000,
  pricePerMeter: 190000,
  area: 65.8,
  rooms: 3,
  floor: 7,
  totalFloors: 12,
  description: 'Светлая и просторная трехкомнатная квартира в современном жилом комплексе. Из окон открывается прекрасный вид на парк. Развитая инфраструктура района: школы, детские сады, магазины, спортивные комплексы - все в шаговой доступности.',
  characteristics: {
    buildingType: 'Монолитный',
    yearBuilt: '2015',
    ceilingHeight: '2.8 м',
    balcony: 'Застекленная лоджия',
    bathroom: 'Раздельный',
    repair: 'Евроремонт',
    parking: 'Подземная',
  },
  agent: {
    name: 'Иванов Иван',
    phone: '+7 (999) 123-45-67',
  }
});

// Форма для заявки
const inquiryForm = reactive({
  name: '',
  phone: '',
  message: ''
});

// Отправка заявки
const submitInquiry = () => {
  console.log('Отправка заявки:', inquiryForm);
  // Здесь будет логика отправки заявки на бэкенд
  alert('Ваша заявка отправлена!');
  
  // Сброс формы
  inquiryForm.name = '';
  inquiryForm.phone = '';
  inquiryForm.message = '';
};
</script>

<style scoped>
.property-detail {
  padding: 1rem;
}

.property-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  gap: 1rem;
}

.property-titles {
  flex: 1;
}

.property-address {
  color: #666;
  margin-top: 0.5rem;
}

.property-price h2 {
  font-size: 1.8rem;
  color: #42b983;
  margin: 0;
}

.property-gallery {
  margin-bottom: 2rem;
}

.main-image-placeholder {
  background-color: #f8f9fa;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  margin-bottom: 1rem;
}

.thumbnail-images {
  display: flex;
  gap: 1rem;
}

.thumbnail-placeholder {
  background-color: #f8f9fa;
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  font-size: 0.8rem;
}

.property-content {
  display: flex;
  gap: 2rem;
  margin-bottom: 2rem;
}

.property-details {
  flex: 2;
}

.detail-highlights {
  display: flex;
  background-color: #f8f9fa;
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 2rem;
  gap: 2rem;
}

.highlight {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.highlight i {
  font-size: 1.5rem;
  color: #42b983;
}

.description-section,
.characteristics-section,
.location-section {
  margin-bottom: 2rem;
}

.characteristics-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
}

.characteristic-item {
  display: flex;
  flex-direction: column;
}

.characteristic-name {
  font-weight: 600;
}

.map-placeholder {
  background-color: #f8f9fa;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
}

.property-sidebar {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.agent-card,
.inquiry-form {
  background-color: #f8f9fa;
  border-radius: 8px;
  padding: 1.5rem;
}

.agent-info {
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.agent-avatar-placeholder {
  width: 80px;
  height: 80px;
  background-color: #e9e9e9;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.agent-avatar-placeholder i {
  font-size: 2rem;
  color: #666;
}

.agent-name {
  font-weight: 600;
  margin: 0;
}

.agent-position {
  color: #666;
  margin: 0.5rem 0;
}

.p-field {
  margin-bottom: 1rem;
}

.p-field label {
  display: block;
  margin-bottom: 0.5rem;
}

.w-full {
  width: 100%;
}

.similar-properties {
  margin-top: 3rem;
}

.similar-properties-placeholder {
  background-color: #f8f9fa;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  margin-top: 1rem;
}

@media (max-width: 768px) {
  .property-content {
    flex-direction: column;
  }
  
  .detail-highlights {
    flex-direction: column;
    gap: 1rem;
  }
}
</style>