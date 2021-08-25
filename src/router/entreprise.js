

import EnterpriseRegister from '../views/enterprise/auth/EnterpriseRegister.vue';

import Container from '../views/enterprise/Container.vue'
const EntrepriseRoute = [
    
    {
        path: '',
        name: 'enterprise',
        component: Container,
        
        children : [
          
           
            { path: '/enterprise/register', name: 'EnterpriseRegister', component: EnterpriseRegister },
            
           
        ]
    }, 
    
  
  ];

  export default EntrepriseRoute;