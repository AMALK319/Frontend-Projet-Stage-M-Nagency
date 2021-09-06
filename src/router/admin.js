


import Dashboard  from '../views/admin/Dashboard.vue';
import Candidates  from '../views/admin/Candidates.vue';
import Candidate  from '../views/admin/Candidate.vue';
import Enterprises  from '../views/admin/Enterprises.vue';
import HomeAdmin  from '../views/admin/HomeAdmin.vue';
import Container from '../views/admin/Container.vue'

const  AdminRoute = [
    
    {
        path: '',
        name: 'admin',
        component: Container,
        
        children : [
          
         
          
            { path: '/admin/home', name: 'HomeAdmin', component:  HomeAdmin },
            { path: '/admin/dashboard', name: 'Dashboard', component:  Dashboard },
            { path: '/admin/candidates', name: 'Candidates', component:  Candidates },
            { path: '/admin/candidate/:token', name: 'Candidate', component:  Candidate },
            { path: '/admin/enterprises', name: 'Enterprises', component:  Enterprises },
           
        
          
        ]
    }, 
    
  
  ];

  export default AdminRoute;