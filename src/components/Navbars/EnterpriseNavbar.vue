<template>
  <nav class="navbar navbar-expand-lg fixed-top navbar-light navigation">
    <div class="container-fluid">
      <a class="navbar-brand navlink" href="/">G.Employees</a>
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
              class="nav-link navlink"
              aria-current="page"
              href="/enterprise/home"
              style="color:white"
              >Acceuil</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link navlink" href="/enterprise/tarifs" style="color:white"
              >Nos Tarifs</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link navlink" href="/enterprise/candidates" style="color:white"
              >Nos Candidats</a
            >
          </li>
      <!--     <li class="nav-item dropdown">
            <a
              class="nav-link navlink dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style="color:white"
            >
              Spécialités
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <div v-for="(category, index) in categories" :key="index.$key">
                <li>
                  <a class="dropdown-item" href="#">
                    {{ category.category_name }}</a
                  >
                </li>
              </div>
            </ul>
          </li> -->
        </ul>
        <div class="d-flex">
          <a
            class="nav-link navlink"
            href=""
            target="_blank"
            data-toggle="tooltip"
            title="Tap to search "
          >
            <i class="bi bi-search" style="font-size: 20px"></i>
          </a>

          <a
            class="nav-link navlink nav-link-icon"
            href="/enterprise/conversations"
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
            style="color:white"
          >
            <i class="bi bi-person-circle" style="font-size: 20px"></i>
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li>
              <a class="dropdown-item" href="#">Action</a>
            </li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
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
      categories: null,
     
    };
  },
  mounted() {
    ApiService.get(this.$appUrl + "/api/enterprise/get-categories")
      .then((response) => {
        this.categories = response.data.categories;
        console.log(response.data.categories);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    show(category) {
      
      ApiService.get(
        this.$appUrl + "/api/enterprise/get-candidates/" + category
      )
        .then((response) => {
          this.candidates = response.data.candidates;
          console.log(response.data);
        })
        .catch((error) => console.log(error));
    },
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
}


/* lien visité */

/* souris sur le lien */

</style>
