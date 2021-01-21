import Vue from 'vue';
import VueRouter from 'vue-router';
import QRScan from '../views/QRScan.vue';
import QRDisplay from '../views/QRDisplay.vue';
import Auth from '../views/Auth.vue';
import News from '../views/News.vue';
import Alert from '../views/Alert.vue';
import About from '../views/About.vue';
import Home from '../views/Home.vue';
// import SignUp from '../components/SignUp.vue';

Vue.use(VueRouter);

const routes = [
  // {
  //   path: '/signup',
  //   name: 'SignUp',
  //   component: SignUp,
  // },
  {
    path: '/scan/',
    name: 'QRScan',
    component: QRScan,
  },
  {
    path: '/auth/',
    name: 'Auth',
    component: Auth,
  },
  {
    path: '/news/',
    name: 'News',
    component: News,
  },
  {
    path: '/alerts/',
    name: 'Alert',
    component: Alert,
  },
  {
    path: '/about/',
    name: 'About',
    component: About,
  },
  {
    path: '/',
    name: 'QRDisplay',
    component: QRDisplay,
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
