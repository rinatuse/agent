<template>
    <header class="header">
      <div class="header-container">
        <div class="logo">
          <router-link to="/">
            <h1>Лого</h1>
          </router-link>
        </div>
        <nav class="main-nav">
          <ul>
            <li><router-link to="/">Главная</router-link></li>
            <li><router-link to="/catalog">Каталог</router-link></li>
            <li><router-link to="/about">О нас</router-link></li>
            <li><router-link to="/contact">Контакты</router-link></li>
          </ul>
        </nav>
        <div class="user-actions">
          <Button icon="pi pi-search" rounded aria-label="Поиск" />
          <Button icon="pi pi-user" rounded aria-label="Личный кабинет" class="ml-2" />
        </div>
      </div>
    </header>
  </template>
  
  <script setup lang="ts">
  import Button from 'primevue/button';
  </script>
  
  <style scoped>
  .header {
    background-color: #154734;
    padding: 1rem 0;
  }
  
  .header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }
  
  .logo h1 {
    color: #2c3e50;
    margin: 0;
    font-size: 1.5rem;
  }
  
  .main-nav ul {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .main-nav li {
    margin: 0 1rem;
  }
  
  .main-nav a {
    text-decoration: none;
    color: #ffffff;
    font-weight: 500;
    transition: color 0.3s;
  }
  
  .main-nav a:hover {
    color: #C861D3;
  }
  
  .user-actions {
    display: flex;
    align-items: center;
  }
  </style>