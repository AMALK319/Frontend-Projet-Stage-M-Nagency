

import EnterpriseRegister from '../views/enterprise/auth/EnterpriseRegister.vue';
import HomeEnterprise from '../views/enterprise/HomeEnterprise.vue';
import Candidats from '../views/enterprise/Candidats.vue';
import Container from '../views/enterprise/Container.vue'
const EntrepriseRoute = [
    
    {
        path: '',
        name: 'enterprise',
        component: Container,
        
        children : [
          
         
            { path: '/enterprise/register', name: 'EnterpriseRegister', component: EnterpriseRegister },
            { path: '/enterprise/home', name: 'HomeEnterprise', component:  HomeEnterprise },
            { path: '/enterprise/candidats', name: 'Candidats', component:  Candidats },
            
           
        ]
    }, 
    
  
  ];

  export default EntrepriseRoute;