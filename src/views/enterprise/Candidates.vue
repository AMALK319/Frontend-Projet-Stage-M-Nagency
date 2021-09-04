<template>
  <div class="content">
    <div id="navigation">
      <enterprise-navbar></enterprise-navbar>
    </div>
    <br /><br /><br />
    <div class="container">
      <div class="card">
        <h2 class="text-center" style="color: #dc143c">Filtrer</h2>
        <div class="row">
          <div class="col-4">
            <label for="" class="control-label">Poste</label>
            <input type="search" placeholder="Search" class="form-control" />
          </div>
          <div class="col-4">
            <label for="" class="control-label">Spécialité</label>

            <select
              id=""
              autofocus="autofocus"
              class="form-control"
              aria-label=" "
              @change="show(category)"
              v-model="category"
            >
              <option selected></option>
              <option v-for="(category, index) in categories" :key="index.$key">
                {{ category.category_name }}
              </option>
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
          <div class="card card-candi">
            <div class="card-body">
              <div class="icon text-center">
                <i class="fas fa-female"></i>
              </div>
              <h5 class="card-title text-center">
                {{ candidate.first_name }}.{{ candidate.last_name[0] }}
              </h5>
              <hr />
              <div class="card-text" style="margin-top: 3%">
                <p class="info" v-if="candidate.specialities[1].category_id != null">
                  <i class="bi bi-briefcase"></i>
                  {{ candidate.specialities[0].category_id }} ...
                </p>
                <p class="info" v-else>
                  <i class="bi bi-briefcase"></i>
                  {{ candidate.specialities[0].category_id }}
                </p>
                <p class="info">
                  <i class="bi bi-flag"></i> {{ candidate.nationality }}
                </p>
                <div class="row ">
                  <div class="col-6">
                    <button
                      class="btn btn-sm btn-success btn-card"
                      @click="voir(candidate.token)"
                    >
                      <i class="bi bi-eye-fill"></i> Voir Cv
                    </button>
                  </div>
                  <div class="col-6">
                    <button class="btn btn-sm btn-contact btn-card">
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
    <br /><br /><br />
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
      category: null,
      candidates: null,
      token: null,
    };
  },
  mounted() {
    if (localStorage.category) {
      this.category = localStorage.category;
      
    }
    ApiService.get(this.$appUrl + "/api/enterprise/get-categories")
      .then((response) => {
        this.categories = response.data.categories;
        console.log(response.data.categories);
      })
      .catch((error) => {
        console.log(error);
      });
    if (this.category == null) {
      ApiService.get(this.$appUrl + "/api/enterprise/get-candidates")
        .then((response) => {
          this.candidates = response.data.candidates;
          console.log(response.data);
          /*  console.log(response.data.candidates[0].token); */
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      ApiService.get(
        this.$appUrl + "/api/enterprise/get-candidates/" + this.category
      )
        .then((response) => {
          this.candidates = response.data.candidates;
          console.log(response.data);
        })
        .catch((error) => console.log(error));
    }
  },
  methods: {
    voir(token) {
      ApiService.get(this.$appUrl + "/api/enterprise/get-candidate/" + token)
        .then((response) => {
          this.$router.push("/enterprise/candidate/" + token);
          console.log(response);
        })
        .catch((error) => console.log(error));
    },
    show(category) {
      console.log(category);
      this.category = category;
       localStorage.category = this.category;
      location.reload();
    },
  },
};
</script>

<style scoped>
.card {
  margin-top: 2%;
  padding: 1%;
  
}
.card-candi{
  height: 100%;
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
}
</style>
