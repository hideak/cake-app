import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';
import Products from '../views/Products.vue';
import ProductForm from '../views/ProductForm.vue';
import Records from '../views/Records.vue';
import RecordForm from '../views/RecordForm.vue';
import PlaceholderView from '../views/PlaceholderView.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/records',
    name: 'Records',
    component: Records
  },
  {
    path: '/records/new',
    name: 'NewRecord',
    component: RecordForm
  },
  {
    path: '/records/:id/edit',
    name: 'EditRecord',
    props: { isEditing: true },
    component: RecordForm
  },
  {
    path: '/products',
    name: 'Products',
    component: Products
  },
  {
    path: '/products/new',
    name: 'NewProduct',
    component: ProductForm
  },
  {
    path: '/products/:id/edit',
    name: 'EditProduct',
    props: { isEditing: true },
    component: ProductForm
  },
  {
    path: '/placeholder-view',
    name: 'PlaceholderView',
    component: PlaceholderView
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
