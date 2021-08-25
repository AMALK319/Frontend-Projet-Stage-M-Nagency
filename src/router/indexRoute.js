import Home from '../views/Home.vue'
import VerifyEmail from '../views/auth/VerifyEmail.vue';
import Login from '../views/auth/Login.vue';
import ForgotPassword from '../views/auth/ForgotPassword.vue'; 

const IndexRoute = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/verify-email/:token',
    name: 'verifyEmail',
    component: VerifyEmail
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/forgot-password',
    name: 'ForgotPassword',
    component: ForgotPassword
  },
];

export default IndexRoute;