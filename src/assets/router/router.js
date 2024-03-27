import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'LandingPage', component: () => import('../pages/LandingPage.vue') },
    { path: '/SelfServe', name: 'SelfServe', component: () => import('../pages/SelfServe.vue') },
    { path: '/WashDry', name: 'WashDry', component: () => import('../pages/WashDry.vue') },
    { path: '/PickupDelivery', name: 'PickupDelivery', component: () => import('../pages/PickupDelivery.vue') },
    { path: '/AboutPage', name: 'AboutPage', component: () => import('../pages/AboutPage.vue') },
    { path: '/FAQ', name: 'FAQ', component: () => import('../pages/FAQ.vue') },
    { path: '/BLOG', name: 'BLOG', component: () => import('../pages/BLOG.vue') },
    { path: '/MainContact', name: 'MainContact', component: () => import('../pages/ContactUS.vue') },
    { path: '/Testimonials', name: 'TestiMonials', component: () => import('../pages/Testimonials.vue') },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

export default router;
