import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import PrimeVue from 'primevue/config';
import '@primeuix/themes/aura';

// PrimeVue компоненты
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';
import Dropdown from 'primevue/dropdown';
import Checkbox from 'primevue/checkbox';
import InputNumber from 'primevue/inputnumber';
import Paginator from 'primevue/paginator';

// Стили PrimeVue

import 'primeicons/primeicons.css';

// Создание приложения
const app = createApp(App);

// Регистрация компонентов PrimeVue
app.component('Button', Button);
app.component('InputText', InputText);
app.component('Textarea', Textarea);
app.component('Dropdown', Dropdown);
app.component('Checkbox', Checkbox);
app.component('InputNumber', InputNumber);
app.component('Paginator', Paginator);

// Подключение PrimeVue
app.use(PrimeVue);

// Подключение маршрутизатора
app.use(router);

// Монтирование приложения
app.mount('#app');