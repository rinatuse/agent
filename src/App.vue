<template>
    <div :class="{'home-page-background': isHomePage}">
      <router-view />
    </div>
  </template>
  
  <script setup lang="ts">
  import {computed} from 'vue'
  import {useRoute} from 'vue-router'

  const route = useRoute()
  const isHomePage = computed(() => route.name === 'home')
  </script>
  
  <style>
  /* Глобальные стили */
  :root {
    --primary-color: #42b983;
    --primary-dark: #2c855c;
    --secondary-color: #2c3e50;
    --text-color: #333;
    --light-grey: #f8f9fa;
    --border-color: #e9e9e9;
  }
  
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  body {
    font-family: 'Roboto', 'Arial', sans-serif;
    color: var(--text-color);
    line-height: 1.6;
    
  }

.home-page-background {
  position: relative;
  min-height: 100vh;
}

.home-page-background::before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('../src/assets/images/1.jpg');
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  z-index: -2;
}

.home-page-background::after {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: -1;
}
  
  h1, h2, h3, h4, h5, h6 {
    margin-bottom: 0.5rem;
    font-weight: 600;
    line-height: 1.2;
  }
  
  a {
    color: var(--primary-color);
    text-decoration: none;
  }
  
  a:hover {
    color: var(--primary-dark);
  }
  
  button {
    cursor: pointer;
  }
  
  .w-full {
    width: 100%;
  }
  
  .text-center {
    text-align: center;
  }
  
  .mt-2 {
    margin-top: 0.5rem;
  }
  
  .mt-4 {
    margin-top: 1rem;
  }
  
  .mb-2 {
    margin-bottom: 0.5rem;
  }
  
  .mb-4 {
    margin-bottom: 1rem;
  }
  
  .ml-2 {
    margin-left: 0.5rem;
  }
  
  .mr-2 {
    margin-right: 0.5rem;
  }
  </style>