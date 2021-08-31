

import EnterpriseRegister from '../views/enterprise/auth/EnterpriseRegister.vue';
import HomeEnterprise from '../views/enterprise/HomeEnterprise.vue';
import Candidates from '../views/enterprise/Candidates.vue';
import Candidate from '../views/enterprise/Candidate.vue';
import Tarifs from '../views/enterprise/Tarifs.vue';
import Container from '../views/enterprise/Container.vue'
const EntrepriseRoute = [
    
    {
        path: '',
        name: 'enterprise',
        component: Container,
        
        children : [
          
         
            { path: '/enterprise/register', name: 'EnterpriseRegister', component: EnterpriseRegister },
            { path: '/enterprise/candidates', name: 'Candidates', component:  Candidates },
            { path: '/enterprise/candidate/:token', name: 'Candidate', component:  Candidate },
            { path: '/enterprise/home', name: 'HomeEnterprise', component:  HomeEnterprise },
            { path: '/enterprise/tarifs', name: 'Tarifs', component:  Tarifs },
            
           
        ]
    }, 
    
  
  ];

  export default EntrepriseRoute;