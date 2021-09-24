
<template>
  <nav class="navbar navbar-expand-lg fixed-top navbar-light navigation">
    <div class="container-fluid">
      <a class="navbar-brand navlink nav-link" href="/">G.Employees</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a
              class=" navlink"
              aria-current="page"
              href="/candidate/home"
          
              >A propos</a
            >
          </li>
          <li class="nav-item">
            <a  class=" navlink" href="/candidate/cv"  
              >Mon Cv</a
            >
          </li>
          
          
        </ul>
        <div class="d-flex">
          <a
            class=" nav-link navlink"
            href=""
            target="_blank"
            data-toggle="tooltip"
            title="Tap to search "
          >
            <i class="bi bi-search" style="font-size: 20px"></i>
          </a>

          <a
            class="nav-link navlink nav-link-icon"
            href=""
            target="_blank"
            data-toggle="tooltip"
            title=""
          >
            <i class="bi bi-envelope-fill" style="font-size: 20px"></i>
          </a>

          <a
            class="nav-link navlink dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            
          >
            <i class="bi bi-person-circle" style="font-size: 20px"></i>
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li>
              <a class="dropdown-item" href="#">Action</a>
            </li>
            <li><a class="dropdown-item" href="#" @click="logout">Se déconnecter</a></li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import ApiService from "../../services/api.service";
export default {
  name: "Navbar",
  data() {
    return {
      
      hover: false,
     
      actived: false,
    };
  },
  mounted() {
    
  },
  methods: {
   active(){
     this.actived = true;
   },
   logout(){
      ApiService.get(this.$appUrl + "/api/candidate/user-logout")
      .then((response) => {
         this.$router.push("/" );
        /*  localStorage.clear(); */
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
   }
  }
};
</script>

<style scoped>
/* #nav {
   background-color: 	#DC143C; 
   
} */
.navlink {
  font-weight: bold;
  color: white;
  text-decoration: none;
  padding-right: 15px;
 
}

.navlink:hover{
  color: #630619;
}


/* lien visité */

/* souris sur le lien */


</style>
