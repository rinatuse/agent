import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';
import MainLayout from '../components/layout/MainLayout.vue';
import HomePage from '../views/HomePage.vue';
import CatalogPage from '../views/CatalogPage.vue';
import PropertyDetailPage from '../views/PropertyDetailPage.vue';
import AboutPage from '@/views/AboutPage.vue';
import ContactPage from '@/views/ContactPage.vue';
import NotFoundPage from '@/views/NotFoundPage.vue';

// Маршруты
const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: '',
        name: 'home',
        component: HomePage,
        meta: { title: 'Главная - ДомЭксперт' }
      },
      {
        path: 'catalog',
        name: 'catalog',
        component: CatalogPage,
        meta: { title: 'Каталог недвижимости - ДомЭксперт' }
      },
      {
        path: 'property/:id',
        name: 'propertyDetail',
        component: PropertyDetailPage,
        meta: { title: 'Просмотр объекта - ДомЭксперт' }
      },
      {
        path: 'about',
        name: 'about',
        component: AboutPage,
        meta: { title: 'О нас - ДомЭксперт' }
      },
      {
        path: 'contact',
        name: 'contact',
        component: ContactPage,
        meta: { title: 'Контакты - ДомЭксперт' }
      },
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'notFound',
    component: NotFoundPage,
    meta: { title: 'Страница не найдена - ДомЭксперт' }
  }
];

// Создание экземпляра маршрутизатора
const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

// Обработка заголовка страницы
router.beforeEach((to, from, next) => {
  document.title = to.meta.title as string || 'ДомЭксперт';
  next();
});

export default router;