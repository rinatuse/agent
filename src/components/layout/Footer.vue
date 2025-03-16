<template>
    <footer class="footer">
        <div class="footer-container">
            <div class="footer-section">
                <h3>Название вашей организации</h3>
                <p>Ваш надежный партнер в мире недвижимости</p>
            </div>

            <div class="footer-section">
                <h4>Контакты</h4>
                <p>Телефон: </p>
                <p>Почта: </p>
                <p>Адрес: </p>
            </div>

            <div class="footer-section">
                <h4>Навигация</h4>
                <ul>
                    <li><router-link to="/">Главная</router-link></li>
                    <li><router-link to="/catalog">Каталог</router-link></li>
                    <li><router-link to="/about">О нас</router-link></li>
                    <li><router-link to="/contact">Контакты</router-link></li>
                </ul>
            </div>

            <div class="footer-section">
                <h4>Мы в соцсетях</h4>
                <div class="social-icons">
                    <a href="#" aria-label="Вконтакте"><i class="pi pi-vk"></i></a>
                    <a href="#" aria-label="Telegram"><i class="pi pi-telegram"></i></a>
                    <a href="#" aria-label="WhatsApp"><i class="pi pi-whatsapp"></i></a>
                </div>
            </div>

            <div class="copyright">
                <p>&copy; {{ new Date().getFullYear() }}Название вашей организации. Все права защищены.</p>
            </div>
        </div>
    </footer>
</template>


<script setup lang="ts">

</script>

<style scoped>
.footer {
  background-color: #154734;
  color: #fff;
  padding: 2rem 0 1rem;
}

.footer-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.footer-section {
  flex: 1;
  min-width: 200px;
  margin-bottom: 1.5rem;
  padding: 0 1rem;
}

.footer-section h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.footer-section h4 {
  font-size: 1.2rem;
  margin-bottom: 1rem;
}

.footer-section ul {
  list-style: none;
  padding: 0;
}

.footer-section li {
  margin-bottom: 0.5rem;
}

.footer-section a {
  color: #ddd;
  text-decoration: none;
  transition: color 0.3s;
}

.footer-section a:hover {
  color: #42b983;
}

.social-icons {
  display: flex;
  gap: 1rem;
}

.social-icons a {
  font-size: 1.5rem;
}

.copyright {
  text-align: center;
  padding-top: 1.5rem;
  margin-top: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}
</style>