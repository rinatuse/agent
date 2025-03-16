<template>
    <div class="contact-page">
      <h1>Свяжитесь с нами</h1>
      
      <div class="contact-container">
        <div class="contact-info">
          <h2>Контактная информация</h2>
          
          <div class="info-item">
            <i class="pi pi-map-marker"></i>
            <div>
              <h3>Адрес</h3>
              <p>г. Москва, ул. Примерная, 123, офис 456</p>
            </div>
          </div>
          
          <div class="info-item">
            <i class="pi pi-phone"></i>
            <div>
              <h3>Телефон</h3>
              <p>+7 (999) 123-45-67</p>
              <p>+7 (999) 765-43-21</p>
            </div>
          </div>
          
          <div class="info-item">
            <i class="pi pi-envelope"></i>
            <div>
              <h3>Email</h3>
              <p>info@dom-expert.ru</p>
              <p>sales@dom-expert.ru</p>
            </div>
          </div>
          
          <div class="info-item">
            <i class="pi pi-clock"></i>
            <div>
              <h3>Часы работы</h3>
              <p>Пн-Пт: 9:00 - 20:00</p>
              <p>Сб: 10:00 - 18:00</p>
              <p>Вс: выходной</p>
            </div>
          </div>
          
          <div class="social-links">
            <h3>Мы в социальных сетях</h3>
            <div class="social-icons">
              <a href="#" aria-label="Вконтакте"><i class="pi pi-vk"></i></a>
              <a href="#" aria-label="Telegram"><i class="pi pi-telegram"></i></a>
              <a href="#" aria-label="WhatsApp"><i class="pi pi-whatsapp"></i></a>
            </div>
          </div>
        </div>
        
        <div class="contact-form-container">
          <h2>Отправьте нам сообщение</h2>
          
          <form class="contact-form" @submit.prevent="submitForm">
            <div class="form-group">
              <label for="name">Ваше имя*</label>
              <InputText id="name" v-model="form.name" :class="{'p-invalid': submitted && !form.name}" required />
              <small v-if="submitted && !form.name" class="p-error">Имя обязательно</small>
            </div>
            
            <div class="form-group">
              <label for="email">Email*</label>
              <InputText id="email" v-model="form.email" type="email" :class="{'p-invalid': submitted && !form.email}" required />
              <small v-if="submitted && !form.email" class="p-error">Email обязателен</small>
            </div>
            
            <div class="form-group">
              <label for="phone">Телефон</label>
              <InputText id="phone" v-model="form.phone" />
            </div>
            
            <div class="form-group">
              <label for="subject">Тема*</label>
              <Dropdown
                id="subject"
                v-model="form.subject"
                :options="subjectOptions"
                optionLabel="name"
                placeholder="Выберите тему"
                :class="{'p-invalid': submitted && !form.subject}"
                required
              />
              <small v-if="submitted && !form.subject" class="p-error">Тема обязательна</small>
            </div>
            
            <div class="form-group">
              <label for="message">Сообщение*</label>
              <Textarea
                id="message"
                v-model="form.message"
                rows="5"
                :class="{'p-invalid': submitted && !form.message}"
                required
              />
              <small v-if="submitted && !form.message" class="p-error">Сообщение обязательно</small>
            </div>
            
            <div class="form-group">
              <div class="p-field-checkbox">
                <Checkbox
                  id="agree"
                  v-model="form.agree"
                  :binary="true"
                  :class="{'p-invalid': submitted && !form.agree}"
                  required
                />
                <label for="agree" :class="{'p-error': submitted && !form.agree}">
                  Я согласен на обработку персональных данных*
                </label>
              </div>
              <small v-if="submitted && !form.agree" class="p-error">Необходимо согласие</small>
            </div>
            
            <Button
              type="submit"
              label="Отправить сообщение"
              icon="pi pi-send"
              class="p-button-primary"
              :loading="loading"
            />
          </form>
        </div>
      </div>
      
      <div class="map-section">
        <h2>Наше расположение</h2>
        <div class="map-placeholder">
          <p>Здесь будет карта с расположением офиса</p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { reactive, ref } from 'vue';
  import InputText from 'primevue/inputtext';
  import Textarea from 'primevue/textarea';
  import Dropdown from 'primevue/dropdown';
  import Checkbox from 'primevue/checkbox';
  import Button from 'primevue/button';
  
  const subjectOptions = [
    { name: 'Общий вопрос', value: 'general' },
    { name: 'Покупка недвижимости', value: 'purchase' },
    { name: 'Продажа недвижимости', value: 'sale' },
    { name: 'Аренда недвижимости', value: 'rent' },
    { name: 'Сотрудничество', value: 'partnership' },
    { name: 'Другое', value: 'other' }
  ];
  
  const form = reactive({
    name: '',
    email: '',
    phone: '',
    subject: null,
    message: '',
    agree: false
  });
  
  const submitted = ref(false);
  const loading = ref(false);
  
  const submitForm = () => {
    submitted.value = true;
    
    // Проверка заполнения обязательных полей
    if (!form.name || !form.email || !form.subject || !form.message || !form.agree) {
      return;
    }
    
    loading.value = true;
    
    // Имитация отправки формы
    setTimeout(() => {
      loading.value = false;
      
      // Сброс формы
      form.name = '';
      form.email = '';
      form.phone = '';
      form.subject = null;
      form.message = '';
      form.agree = false;
      submitted.value = false;
      
      alert('Ваше сообщение успешно отправлено! Мы свяжемся с вами в ближайшее время.');
    }, 1500);
  };
  </script>
  
  <style scoped>
  .contact-page {
    padding: 1rem;
  }
  
  .contact-page h1 {
    margin-bottom: 2rem;
    text-align: center;
  }
  
  .contact-container {
    display: flex;
    gap: 2rem;
    margin-bottom: 3rem;
  }
  
  .contact-info {
    flex: 1;
    background-color: var(--light-grey);
    padding: 2rem;
    border-radius: 8px;
  }
  
  .contact-info h2,
  .contact-form-container h2,
  .map-section h2 {
    margin-bottom: 1.5rem;
    font-size: 1.5rem;
  }
  
  .info-item {
    display: flex;
    gap: 1rem;
    margin-bottom: 1.5rem;
  }
  
  .info-item i {
    font-size: 1.5rem;
    color: var(--primary-color);
    margin-top: 0.25rem;
  }
  
  .info-item h3 {
    margin-bottom: 0.5rem;
    font-size: 1.2rem;
  }
  
  .social-links {
    margin-top: 2rem;
  }
  
  .social-icons {
    display: flex;
    gap: 1rem;
    margin-top: 1rem;
  }
  
  .social-icons a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background-color: var(--primary-color);
    color: white;
    border-radius: 50%;
    transition: background-color 0.3s;
  }
  
  .social-icons a:hover {
    background-color: var(--primary-dark);
  }
  
  .contact-form-container {
    flex: 2;
  }
  
  .contact-form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  
  .form-group {
    display: flex;
    flex-direction: column;
  }
  
  .form-group label {
    margin-bottom: 0.5rem;
  }
  
  .form-group .p-dropdown,
  .form-group .p-inputtext,
  .form-group .p-inputtextarea {
    width: 100%;
  }
  
  .p-field-checkbox {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  
  .map-section {
    margin-top: 3rem;
  }
  
  .map-placeholder {
    height: 400px;
    background-color: var(--light-grey);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
  }
  
  .p-error {
    color: #f44336;
  }
  
  @media (max-width: 768px) {
    .contact-container {
      flex-direction: column;
    }
  }
  </style>