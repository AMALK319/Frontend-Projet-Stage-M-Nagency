<template>
  <div class=" content ">
    <div id="navigation" >
      <enterprise-navbar></enterprise-navbar>
    </div>
    <br><br><br>
    <div class="container  ">
      <div class="card">
        <h2 class="text-center" style="color:#DC143C">Filtrer</h2>
        <div class="row">
          <div class="col-4">
            <label for="" class="control-label">Poste</label>
            <input type="search" placeholder="Search" class="form-control" />
          </div>
          <div class="col-4">
            <label for="" class="control-label">Spécialité:</label>

            <select
              id=""
              autofocus="autofocus"
              class="form-control"
              aria-label=" "
            >
              <option
                v-for="(category, index) in categories"
                :key="index.$key"
                >{{ category.category_name }}</option
              >

            </select>
          </div>
          <div class="col-4">
            <label for="" class="control-label">Localisation</label>
            <input type="text" class="form-control" placeholder=" " />
          </div>
        </div>
      </div>
      <br />
      <div class="row">
        <div
          class="col-3"
          v-for="(candidate, index) in candidates"
          :key="index.$key"
        >
          <div class="card">
            <div class="card-body">
              <div class="icon text-center">
                <i class="fas fa-female"></i>
              </div>
              <h5 class="card-title text-center">{{ candidate.first_name }}.{{ candidate.last_name[0] }}</h5>
              <hr />
              <div class="card-text ">
                <p><i class="bi bi-briefcase"></i>  Spécialité</p>
                <p><i class="bi bi-geo-alt"></i> Localisation</p>
                <div class="row">
                  <div class="col-6">
                    <button class="btn btn-sm btn-success btn-card " @click="voir(candidate.token)">
                      <i class="bi bi-eye-fill"></i> Voir Cv
                    </button>
                  </div>
                  <div class="col-6">
                    <button class="btn btn-sm btn-contact btn-card ">
                      <i class="bi bi-chat-dots-fill"></i> Contacter
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br><br><br>
    <Footer></Footer>
  </div>
</template>

<script>
import ApiService from "../../services/api.service";
import EnterpriseNavbar from "@/components/Navbars/EnterpriseNavbar.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Candidates",
  components: {
    EnterpriseNavbar,
    Footer,
  },
  data() {
    return {
      categories: null,
      candidates: null, 
      token: null,
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

    ApiService.get(this.$appUrl + "/api/enterprise/get-candidates")
      .then((response) => {
        this.candidates = response.data.candidates;
        console.log(response.data);
        /*  console.log(response.data.candidates[0].token); */
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods:{
      voir(token){
      ApiService.get( this.$appUrl+"/api/enterprise/get-candidate/" + token)
      .then((response) => {
        this.$router.push("/enterprise/candidate/" + token);
        console.log(response);

      })
      .catch((error) => console.log(error));
      },
  }
};
</script>

<style scoped>
.card {
  margin-top: 2%;
  padding: 1%;
}
hr {
  padding: 0;
  margin-bottom: 2px;
  color: rgb(187, 186, 186);
  width: auto;
}
.btn-card {
  color: white;
  margin-bottom: 1%;
  width: 100%;
}
.btn-contact {
  background-color: #dc143c;
  color: white;
  margin-left: 10%;
}
</style>
