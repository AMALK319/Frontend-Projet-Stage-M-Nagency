<template>
  <nav class="navbar navigation navbar-expand-lg ">
    <div class="container-fluid">
      <a class="navbar-brand navlink" href="/">Logo</a>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item" id="acceuil">
            <a
              class="nav-link navlink"
              aria-current="page"
              href="#"
              
              >Acceuil</a
            >
          </li>
          <li class="nav-item" id="cv">
            <a
              class="nav-link navlink"
              href=""
             
              >Spécialités</a
            >
          </li>
          <li class="nav-item" id="cv">
            <a
              class="nav-link navlink"
              href=""
            
              >Nos Tarifs</a
            >
          </li>
        </ul>
        <div class="d-flex">
          <a
            class="nav-link navlink"
            href=""
            target="_blank"
            data-toggle="tooltip"
            title="Tap to search "
          >
           
           <!--  <span
              class="iconify"
              data-icon="ion:search-circle"
              style="color: white; font-size: 28px"
            ></span> -->
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
             
            id="navbarDropdownMenuLink"
            role="button"
            data-mdb-toggle="dropdown"
            aria-expanded="false"
          >
            <i class="bi bi-person-circle" style="font-size: 20px"></i> 
          </a>
          <ul
            class="dropdown-menu dropdown-menu-end"
            aria-labelledby="navbarDropdownMenuLink"
          >
            <li>
              <a class="dropdown-item" href="">My profile</a>
            </li>
            <li>
              <a class="dropdown-item" href="">Settings</a>
            </li>
            <li>
              <a class="dropdown-item" href="">Logout</a>
            </li>
          </ul>
          
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      hover: false,
    };
  },
};
</script>


<style scoped>
/* #nav {
   background-color: 	#DC143C; 
   
} */
.navlink {
  font-weight: bold;
  color: white;
}
.active {
  color: #00008b;
}
</style>