

import CandidateRegister from '../views/candidate/auth/CandidateRegister.vue';
import Cv from '../views/candidate/Cv.vue';
import HomeCandidate  from '../views/candidate/HomeCandidate.vue';
import CandidateConversation from '../views/candidate/conversations/CandidateConversation.vue'
import Container from '../views/candidate/Container.vue'
const CandidateRoute = [
    
    {
        path: '',
        name: 'candidate',
        component: Container,
        
        children : [
          
         
            { path: '/candidate/register', name: 'CandidateRegister', component: CandidateRegister },
            { path: '/candidate/home', name: 'HomeCandidate', component:  HomeCandidate },
            { path: '/candidate/cv', name: 'Cv', component: Cv },
            { path: '/candidate/conversations', name: 'CandidateConversation', component: CandidateConversation},
        
          
        ]
    }, 
    
  
  ];

  export default CandidateRoute;