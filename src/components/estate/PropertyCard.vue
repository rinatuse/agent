<template>
  <div class="property-card">
    <div class="property-image">
      <div v-if="property.isNew" class="property-badge new">Новинка</div>
      <div v-if="property.isSpecialOffer" class="property-badge special">Акция</div>
      <div class="image-placeholder">
        <!-- Здесь будет изображение -->
        <i class="pi pi-image"></i>
      </div>
      <button class="favorite-button" @click="toggleFavorite">
        <i class="pi" :class="{'pi-heart-fill': isFavorite, 'pi-heart': !isFavorite}"></i>
      </button>
    </div>
    
    <div class="property-content">
      <div class="property-price">{{ formatPrice(property.price) }} ₽</div>
      <h3 class="property-title">{{ property.title }}</h3>
      <p class="property-address">{{ property.address }}</p>
      
      <div class="property-features">
        <div class="feature">
          <i class="pi pi-home"></i>
          <span>{{ property.area }} м²</span>
        </div>
        <div class="feature">
          <i class="pi pi-table"></i>
          <span>{{ property.rooms }} комн.</span>
        </div>
        <div class="feature">
          <i class="pi pi-building"></i>
          <span>{{ property.floor }}/{{ property.totalFloors }} эт.</span>
        </div>
      </div>
      
      <div class="property-footer">
        <Button 
          label="Подробнее" 
          icon="pi pi-arrow-right" 
          class="p-button-outlined p-button-sm" 
          iconPos="right"
          @click="viewDetails"
        />
        <div class="property-date">{{ formatDate(property.createdAt) }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import Button from 'primevue/button';

interface PropertyProps {
  property: {
    id: string | number;
    title: string;
    address: string;
    price: number;
    area: number;
    rooms: number;
    floor: number;
    totalFloors: number;
    isNew?: boolean;
    isSpecialOffer?: boolean;
    createdAt: Date;
  }
}

const props = defineProps<PropertyProps>();
const router = useRouter();
const isFavorite = ref(false);

// Форматирование цены
const formatPrice = (price: number): string => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
};

// Форматирование даты
const formatDate = (date: Date): string => {
  const now = new Date();
  const timeDiff = Math.abs(now.getTime() - date.getTime());
  const dayDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
  
  if (dayDiff <= 1) {
    return 'Сегодня';
  } else if (dayDiff <= 2) {
    return 'Вчера';
  } else {
    return date.toLocaleDateString('ru-RU', { day: 'numeric', month: 'long' });
  }
};

// Переключение избранного
const toggleFavorite = () => {
  isFavorite.value = !isFavorite.value;
  // Здесь можно добавить логику для сохранения избранных объектов
};

// Просмотр деталей
const viewDetails = () => {
  router.push({
    name: 'propertyDetail',
    params: { id: props.property.id }
  });
};
</script>

<style scoped>
.property-card {
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  background-color: #fff;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.property-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.property-image {
  position: relative;
  height: 200px;
  background-color: #f8f9fa;
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
  color: #ccc;
}

.property-badge {
  position: absolute;
  top: 10px;
  left: 10px;
  padding: 0.25rem 0.75rem;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 600;
  z-index: 1;
}

.property-badge.new {
  background-color: #42b983;
  color: white;
}

.property-badge.special {
  background-color: #ff9500;
  color: white;
}

.favorite-button {
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: rgba(255, 255, 255, 0.8);
  border: none;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.3s;
}

.favorite-button:hover {
  background-color: rgba(255, 255, 255, 1);
}

.favorite-button i {
  color: #ff5757;
  font-size: 1rem;
}

.property-content {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.property-price {
  font-size: 1.25rem;
  font-weight: 700;
  color: #42b983;
  margin-bottom: 0.5rem;
}

.property-title {
  font-size: 1rem;
  margin-bottom: 0.25rem;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.property-address {
  color: #666;
  font-size: 0.875rem;
  margin-bottom: 0.75rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.property-features {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
}

.feature {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.875rem;
}

.feature i {
  color: #666;
}

.property-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
  padding-top: 0.5rem;
}

.property-date {
  font-size: 0.75rem;
  color: #999;
}
</style>