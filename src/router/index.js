import Vue from 'vue'
import EntrepriseRoute from './entreprise'
import CandidateRoute from './candidate'
import IndexRoute from './indexRoute'
import AdminRoute from './admin'
import Router from 'vue-router'

var allRoutes = []
allRoutes = allRoutes.concat(IndexRoute,EntrepriseRoute,CandidateRoute, AdminRoute)
Vue.use(Router);
const router = new Router({
  mode: 'history',
  routes: allRoutes
});


export default router;