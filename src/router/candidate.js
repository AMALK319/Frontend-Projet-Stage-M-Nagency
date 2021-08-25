

import CandidateRegister from '../views/candidate/auth/CandidateRegister.vue';


import Container from '../views/candidate/Container.vue'
const CandidateRoute = [
    
    {
        path: '',
        name: 'candidate',
        component: Container,
        
        children : [
          
         
            { path: '/candidate/register', name: 'CandidateRegister', component: CandidateRegister },
           
          
        ]
    }, 
    
  
  ];

  export default CandidateRoute;