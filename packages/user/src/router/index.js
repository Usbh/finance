import { createRouter, createWebHistory } from 'vue-router';
import CreditWelcome from '../views/CreditWelcome.vue';
import CreditOCR from '../views/CreditOCR.vue';

const routes = [
  { path: '/', name: 'Welcome', component: CreditWelcome },
  { path: '/ocr', name: 'OCR', component: CreditOCR }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
