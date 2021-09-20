  <template>
  <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0  container">
    <div
      class="
        d-flex
        flex-column
        align-items-center align-items-sm-start
        pt-2
        
        min-vh-100
      "
    >
      <br />
      <a
        href="/"
        class="
          d-flex
          align-items-center
          pb-3
          logo
          mb-md-0
          me-md-auto
          text-white text-decoration-none
        "
      >
        <span class="fs-5 d-none d-sm-inline">G.Employees</span>
      </a>
      <ul
        class="
          px-4
          nav nav-pills
          flex-column
          mb-sm-auto mb-0
          align-items-center align-items-sm-start
        "
        id="menu"
      >
        <br /><br />
        <li class="nav-item">
          <a href="/admin/dashboard" class="link nav-link align-middle px-0">
            <i class="fs-5 fas fa-tachometer-alt"></i>
            <span class="ms-1 d-none d-sm-inline titre">   Dashboard</span>
          </a>
        </li>

        <li class="nav-item">
          <a href="/admin/candidates" class="link nav-link px-0 align-middle text-white">
            <i class="fs-4 fas fa-user-tie"></i>
            <span class="ms-1 d-none d-sm-inline titre">   Candidats</span></a
          >
        </li>

        <li>
          <a href="/admin/enterprises" class="link nav-link px-0 align-middle text-white">
            <i class="fs-4 far fa-building"></i>
            <span class="ms-1 d-none d-sm-inline titre">   Entreprises</span>
          </a>
        </li>

        <li>
          <a href="#" class="link nav-link px-0 align-middle  text-white">
            <i class="fas fa-hands-helping" style="font-size: 120%"></i>
            <span class="ms-1 d-none d-sm-inline titre ">Collaborations</span>
          </a>
        </li>
      </ul>
      <hr />
      <div class="dropdown pb-4">
        <a
          href="#"
          class="
            px-5
            d-flex
            align-items-center
            text-decoration-none
            dropdown-toggle 
            text-white
          "
          id="dropdownUser1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src="https://github.com/mdo.png"
            alt="hugenerd"
            width="30"
            height="30"
            class="rounded-circle"
          />
          <span class="d-none d-sm-inline mx-1  ">Admin</span>
        </a>
        <ul
          class="dropdown-menu dropdown-menu-light text-small  shadow"
          aria-labelledby="dropdownUser1"
        >
          <li><a class="dropdown-item text-dark" href="#">Paramétres</a></li>
          <li><a class="dropdown-item text-dark" href="#">Profil</a></li>
          <li>
            <hr class="dropdown-divider" />
          </li>
          <li><a class="dropdown-item text-dark" href="#" @click="logout">Se déconnecter</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import ApiService from "../services/api.service";
export default {
  methods: {
    logout(){
      ApiService.get(this.$appUrl + "/api/candidate/user-logout")
      .then((response) => {
         this.$router.push("/admin/home" );
       
        localStorage.clear();
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
.container {
  background-color: #8b172e;
 
}

a:visited {
  color: white;
}


.link {
  padding-bottom: 20%;
}
.titre {
  font-size: large;
}
.logo {
  padding-left: 16%;
}
.text-dark{
    color: black;
}
</style>