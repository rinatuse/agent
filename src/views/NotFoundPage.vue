<template>
  <div class="not-found">
    <div class="not-found-content">
      <h1>404</h1>
      <h2>Страница не найдена</h2>
      <p>Извините, но запрашиваемая вами страница не существует или была перемещена.</p>
      <div class="actions">
        <Button label="Вернуться на главную" icon="pi pi-home" @click="goHome" />
        <Button label="Перейти в каталог" icon="pi pi-search" class="p-button-outlined" @click="goCatalog" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import Button from 'primevue/button';

const router = useRouter();

const goHome = () => {
  router.push({ name: 'home' });
};

const goCatalog = () => {
  router.push({ name: 'catalog' });
};
</script>

<style scoped>
.not-found {
  min-height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.not-found-content {
  max-width: 600px;
  padding: 2rem;
}

.not-found h1 {
  font-size: 8rem;
  color: var(--primary-color);
  margin: 0;
  line-height: 1;
}

.not-found h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.not-found p {
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 2rem;
}

.actions {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

@media (max-width: 768px) {
  .not-found h1 {
    font-size: 5rem;
  }
  
  .actions {
    flex-direction: column;
  }
}
</style>