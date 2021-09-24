<template>
  <div class="container-fluid">
    <div class="row flex-nowrap">
      <Sidebar></Sidebar>
      <div class="col py-3">
        <h2 class="text-center">Nos Candidats</h2>
        <br />
        <div class="card little-card">
          <div class="row">
            <select class="form-select" aria-label="Default select example">
              <option selected>Show</option>
              <option value="1">5</option>
              <option value="2">10</option>
              <option value="3">15</option>
            </select>
            <input
              type="text"
              class="search form-control form-control-sm"
              placeholder="Rechercher"
            />
          </div>
        </div>
        <br />
        <div class="card">
          <div class="card-body">
            <table class="table">
              <thead class="color text-white">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Nom</th>
                  <th scope="col">Prénom</th>
                  <th scope="col">Adresse E-mail</th>
                  <th scope="col" class="text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(candidate, index) in candidates" :key="index.$key">
                  <th scope="row">{{ candidate.id }}</th>
                  <td class="col-md-2">{{ candidate.last_name }}</td>
                  <td class="col-md-2">{{ candidate.first_name }}</td>
                  <td class="col-md-3">{{ candidate.email }}</td>
                  <td class="col-md-4">
                    <button
                      class="pull-right btn btn-sm btn-secondary btn-card"
                      @click="showModal = true"
                    >
                      <i class="bi bi-trash"></i> Supprimer
                    </button>
                    <!-- Modal -->
                    <div v-show="showModal">
                      <transition name="modal">
                        <div class="modal-mask">
                          <div class="modal-wrapper">
                            <div class="modal-dialog" role="document">
                              <div class="modal-content">
                                <div class="modal-header">
                                  <h4
                                    v-if="candidate.gender == 'Mme'"
                                    class="modal-title"
                                  >
                                    Supprimer la candidate :
                                    {{ candidate.gender }}
                                    {{ candidate.last_name }}
                                    {{ candidate.first_name }}
                                  </h4>
                                  <h4 v-else class="modal-title">
                                    Supprimer le candidat :
                                    {{ candidate.gender }}
                                    {{ candidate.last_name }}
                                    {{ candidate.first_name }}
                                  </h4>
                                </div>
                                <div class="modal-body">
                                  <p>
                                    Êtes-vous sûr de vouloir supprimer
                                    <span v-if="candidate.gender == 'Mme'"
                                      >cette candidate</span
                                    ><span v-else>ce candidat</span> ?
                                  </p>
                                </div>
                                <div class="modal-footer">
                                  <button
                                    type="button"
                                    class="btn btn-secondary"
                                    @click="showModal = false"
                                  >
                                    Annuler
                                  </button>
                                  <button
                                    type="button"
                                    class="btn-show btn"
                                    @click="deleteCandidate(candidate.id)"
                                  >
                                    Oui
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </transition>
                    </div>
                    <button
                      class="pull-right btn btn-sm btn-show btn-card"
                      @click="show(candidate.token)"
                    >
                      <i class="bi bi-eye-fill"></i> Voir Cv
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ApiService from "../../services/api.service";
import Sidebar from "../../components/Sidebar.vue";

export default {
  name: "Candidates",
  components: {
    Sidebar,
  },
  props: {},
  data() {
    return {
      categories: null,
      candidates: null,
      token: null,
      showModal: false,
    };
  },
  mounted() {
    ApiService.get(this.$appUrl + "/api/admin/get-categories")
      .then((response) => {
        this.categories = response.data.categories;
        console.log(response.data.categories);
      })
      .catch((error) => {
        console.log(error);
      });
    ApiService.get(this.$appUrl + "/api/admin/get-candidates")
      .then((response) => {
        this.candidates = response.data.candidates;
        console.log(response.data);
        /*  console.log(response.data.candidates[0].token); */
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    show(token) {
      ApiService.get(this.$appUrl + "/api/admin/get-candidate/" + token)
        .then((response) => {
          this.$router.push("/admin/candidate/" + token);
          console.log(response);
        })
        .catch((error) => console.log(error));
    },
    deleteCandidate(id) {
      ApiService.get(this.$appUrl + "/api/admin/delete-candidate/" + id)
        .then(() => {
        
          
           
        })
        .catch((error) => console.log(error));
          location.reload;
    },
  },
};
</script>

<style scoped>
.little-card {
  padding: 0.5%;
  padding-left: 2%;
  margin-top: 4%;
}
.color {
  background-color: #aa213d;
}
h2 {
  color: #aa213d;
}
.search {
  width: 20%;
  margin-left: 68%;
}
.form-select {
  width: 10%;
}
.btn-card {
  margin-right: 3%;
  width: 35%;
}
.btn-show {
  background-color: #aa213d;
  color: white;
}


</style>
