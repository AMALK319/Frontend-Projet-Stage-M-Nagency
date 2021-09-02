


import HomeAdmin  from '../views/admin/HomeAdmin.vue';


const  AdminRoute = [
    
    {
        path: '',
        name: 'admin',
       
        
        children : [
          
         
          
            { path: '/admin/home', name: 'HomeAdmin', component:  HomeAdmin },
           
        
          
        ]
    }, 
    
  
  ];

  export default AdminRoute;