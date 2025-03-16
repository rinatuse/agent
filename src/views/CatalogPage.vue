<template>
    <div class="catalog-page">
      <h1>Каталог недвижимости</h1>
      
      <div class="catalog-container">
        <aside class="filter-sidebar">
          <h2>Фильтры</h2>
          
          <div class="filter-group">
            <h3>Тип недвижимости</h3>
            <div class="p-field-checkbox">
              <Checkbox v-model="filters.propertyTypes" inputId="apartment" name="property" value="apartment" />
              <label for="apartment">Квартиры</label>
            </div>
            <div class="p-field-checkbox">
              <Checkbox v-model="filters.propertyTypes" inputId="house" name="property" value="house" />
              <label for="house">Дома</label>
            </div>
            <div class="p-field-checkbox">
              <Checkbox v-model="filters.propertyTypes" inputId="commercial" name="property" value="commercial" />
              <label for="commercial">Коммерческая</label>
            </div>
          </div>
          
          <div class="filter-group">
            <h3>Цена</h3>
            <div class="price-range">
              <label>От</label>
              <InputNumber v-model="filters.priceMin" :min="0" placeholder="Мин. цена" />
              <label>До</label>
              <InputNumber v-model="filters.priceMax" :min="0" placeholder="Макс. цена" />
            </div>
          </div>
          
          <div class="filter-group">
            <h3>Площадь (м²)</h3>
            <div class="area-range">
              <label>От</label>
              <InputNumber v-model="filters.areaMin" :min="0" placeholder="Мин. площадь" />
              <label>До</label>
              <InputNumber v-model="filters.areaMax" :min="0" placeholder="Макс. площадь" />
            </div>
          </div>
          
          <div class="filter-group">
            <h3>Комнаты</h3>
            <div class="rooms-buttons">
              <Button 
                v-for="room in [1, 2, 3, 4, '5+']" 
                :key="room"
                :class="{ 'p-button-outlined': !filters.rooms.includes(room.toString()), 'p-button-primary': filters.rooms.includes(room.toString()) }"
                @click="toggleRoom(room.toString())"
                class="room-button"
              >
                {{ room }}
              </Button>
            </div>
          </div>
          
          <div class="filter-actions">
            <Button label="Применить" icon="pi pi-filter" class="p-button-primary" />
            <Button label="Сбросить" icon="pi pi-times" class="p-button-outlined" @click="resetFilters" />
          </div>
        </aside>
        
        <div class="properties-list">
          <div class="properties-header">
            <span>Найдено: {{ properties.length }} объектов</span>
            <Dropdown v-model="sortOption" :options="sortOptions" optionLabel="name" placeholder="Сортировка" class="sort-dropdown" />
          </div>
          
          <div class="properties-grid">
            <div v-if="properties.length === 0" class="no-properties">
              <p>Объекты недвижимости не найдены. Попробуйте изменить параметры поиска.</p>
            </div>
            
            <div v-else class="property-card-placeholder">
              <p>Здесь будут отображаться карточки объектов недвижимости</p>
            </div>
          </div>
          
          <Paginator :rows="9" :totalRecords="100" template="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink" />
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import Checkbox from 'primevue/checkbox';
  import InputNumber from 'primevue/inputnumber';
  import Button from 'primevue/button';
  import Dropdown from 'primevue/dropdown';
  import Paginator from 'primevue/paginator';
  
  // Модель фильтров
  const filters = ref({
    propertyTypes: [] as string[],
    priceMin: null as number | null,
    priceMax: null as number | null,
    areaMin: null as number | null,
    areaMax: null as number | null,
    rooms: [] as string[]
  });
  
  // Опции сортировки
  const sortOptions = [
    { name: 'По умолчанию', value: 'default' },
    { name: 'Цена (по возрастанию)', value: 'price_asc' },
    { name: 'Цена (по убыванию)', value: 'price_desc' },
    { name: 'Площадь (по возрастанию)', value: 'area_asc' },
    { name: 'Площадь (по убыванию)', value: 'area_desc' },
    { name: 'Новизна', value: 'date_desc' }
  ];
  
  const sortOption = ref(sortOptions[0]);
  
  // Временные данные объектов недвижимости (пустой массив)
  const properties = ref([]);
  
  // Переключение комнат в фильтре
  const toggleRoom = (room: string) => {
    const index = filters.value.rooms.indexOf(room);
    if (index === -1) {
      filters.value.rooms.push(room);
    } else {
      filters.value.rooms.splice(index, 1);
    }
  };
  
  // Сброс фильтров
  const resetFilters = () => {
    filters.value = {
      propertyTypes: [],
      priceMin: null,
      priceMax: null,
      areaMin: null,
      areaMax: null,
      rooms: []
    };
  };
  </script>
  
  <style scoped>
  .catalog-page {
    padding: 1rem;
  }
  
  .catalog-page h1 {
    margin-bottom: 2rem;
  }
  
  .catalog-container {
    display: flex;
    gap: 2rem;
  }
  
  .filter-sidebar {
    width: 300px;
    background-color: #f8f9fa;
    padding: 1.5rem;
    border-radius: 8px;
    position: sticky;
    top: 2rem;
    align-self: flex-start;
  }
  
  .filter-sidebar h2 {
    margin-bottom: 1.5rem;
    font-size: 1.3rem;
  }
  
  .filter-group {
    margin-bottom: 1.5rem;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid #e9e9e9;
  }
  
  .filter-group h3 {
    margin-bottom: 1rem;
    font-size: 1rem;
    font-weight: 600;
  }
  
  .p-field-checkbox {
    margin-bottom: 0.5rem;
    display: flex;
    align-items: center;
  }
  
  .p-field-checkbox label {
    margin-left: 0.5rem;
  }
  
  .price-range, .area-range {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 0.5rem;
    align-items: center;
  }
  
  .rooms-buttons {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
  }
  
  .room-button {
    width: 40px;
    height: 40px;
    padding: 0;
  }
  
  .filter-actions {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .properties-list {
    flex: 1;
  }
  
  .properties-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
  }
  
  .sort-dropdown {
    width: 200px;
  }
  
  .properties-grid {
    margin-bottom: 2rem;
  }
  
  .property-card-placeholder {
    background-color: #f8f9fa;
    padding: 3rem;
    border-radius: 8px;
    text-align: center;
  }
  
  .no-properties {
    text-align: center;
    padding: 3rem;
    background-color: #f8f9fa;
    border-radius: 8px;
  }
  
  @media (max-width: 768px) {
    .catalog-container {
      flex-direction: column;
    }
    
    .filter-sidebar {
      width: 100%;
      position: static;
    }
  }
  </style>