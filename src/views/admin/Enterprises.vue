<template>
  <div class="container-fluid">
    <div class="row flex-nowrap">
      <Sidebar></Sidebar>
      <div class="col py-3">
        <h2 class="text-center">Nos Entreprises</h2>
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
                  <th scope="col">Entreprise</th>
                  <th scope="col">Représentant</th>
                  <th scope="col">Adresse E-mail</th>
                  <th scope="col" class="text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(representative , index) in representatives" :key="index.$key">
                  <th scope="row">{{ representative.id }}</th>
                  <td class="col-md-2"></td>
                  <td class="col-md-2"></td>
                  <td class="col-md-3"></td>
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
                      <h4  class="modal-title"></h4>
                     
                    </div>
                    <div class="modal-body">
                      <p>Êtes-vous sûr de vouloir supprimer  ? </p>
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-secondary"
                        @click="showModal = false"
                      >
                        Annuler
                      </button>
                      <button type="button" class="btn-show btn ">
                        Oui
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </transition>
        </div>
                   
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
      
      representatives: null,
      
      showModal: false,
    };
  },
  mounted() {
    
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

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}
</style>