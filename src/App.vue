<template>
    <router-view />
  </template>
  
  <script setup lang="ts">

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