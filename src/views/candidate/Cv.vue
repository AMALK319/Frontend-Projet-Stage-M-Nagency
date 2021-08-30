<template>
  <div class="contenu">
    <div class="navigation">
      <candidate-navbar> </candidate-navbar>
    </div>
    <div class="card shadow shadow-danger shadow-intensity-md big-card">
      <ul class="nav nav-tabs">
        <li class="nav-item">
          <a
            class="nav-link"
            :class="{ active: current_step == 1 }"
            @click.prevent="goToStep(1)"
            href="#"
            >Détails Personnels</a
          >
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            :class="{ disabled: max_step < 2, active: current_step == 2 }"
            @click.prevent="goToStep(2)"
            href="#"
            >Education</a
          >
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            :class="{ disabled: max_step < 3, active: current_step == 3 }"
            @click.prevent="goToStep(3)"
            href="#"
            >Expériences Professionnelles</a
          >
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            :class="{ disabled: max_step < 4, active: current_step == 4 }"
            @click.prevent="goToStep(4)"
            href="#"
            >Distinctions</a
          >
        </li>
      </ul>
      <br />
      <div class="tab-content">
        <!--   Coordonnées -->
        <div class="coordonnees" v-show="current_step == 1">
          <div class="card small-card">
            <div class="row">
              <div class="col-2">
                <div
                  class="card"
                  style="height: 130px; background-color: rgb(182, 179, 179)"
                >
                  <!-- <div class="icon">
                    <i class="bi bi-camera" ></i>
                  </div> -->
                </div>
              </div>
              <div class="col-10">
                <div class="row">
                  <div class="col-6">
                    <label for="" class="control-label">Prénom:</label>
                    <input
                      type="text"
                      autofocus="autofocus"
                      class="form-control"
                      v-model="coord.first_name"
                      aria-label=" "
                      placeholder=""
                    />
                  </div>
                  <div class="col-6">
                    <label for="" class="control-label">Nom de famille:</label>
                    <input
                      type="text"
                      autofocus="autofocus"
                      class="form-control"
                      v-model="coord.last_name"
                      aria-label=" "
                    />
                  </div>
                </div>

                <div class="row">
                  <div class="col-6">
                    <label for="degree_title" class="control-label"
                      >Adresse e-mail:</label
                    >
                    <input
                      type="text"
                      autofocus="autofocus"
                      class="form-control"
                      aria-label=" "
                      v-model="coord.email"
                    />
                  </div>
                  <div class="col-6">
                    <label for="" class="control-label"
                      >Numéro de téléphone:</label
                    >
                    <input
                      type="text"
                      autofocus="autofocus"
                      class="form-control"
                      aria-label=" "
                      v-model="coord.mobile_number"
                    />
                  </div>
                </div>
              </div>
            </div>
            <br />
            <div class="row">
              <div class="col-6">
                <label for="" class="control-label">Genre</label>
                <select
                  id=""
                  autofocus="autofocus"
                  class="form-control"
                  aria-label=" "
                  v-model="coord.gender"
                >
                  <option selected>Mme</option>
                  <option value="1">Mr</option>
                </select>
              </div>
              <div class="col-6">
                <label for="" class="control-label">Nationalité:</label>
                <input
                  id=""
                  type="text"
                  autofocus="autofocus"
                  class="form-control"
                  aria-label=" "
                  v-model="coord.nationality"
                />
              </div>
            </div>
            <br />
            <div class="row">
              <div class="col-6">
                <label for="" class="control-label">Date de naissance:</label>
                <input
                  id=""
                  type="date"
                  autofocus="autofocus"
                  class="form-control"
                  aria-label=" "
                  v-model="coord.date_of_birth"
                />
              </div>
              <div class="col-6">
                <label for="" class="control-label">Spécialité:</label>
                <select
                  id=""
                  autofocus="autofocus"
                  class="form-control"
                  aria-label=" "
                  v-model="coord.speciality"
                >
                  <option selected>Cloud</option>
                  <option value="1">Réseaux et Télécommunications</option>
                  <option value="2">Data</option>
                  <option value="3">Cloud</option>
                </select>
              </div>
            </div>
            <br />
            <div class="row">
              <div class="col-12">
                <label for="motivation" class="control-label"
                  >Motivation:</label
                >
                <textarea
                  id="motivation"
                  type="text-area"
                  autofocus="autofocus"
                  class="form-control"
                  v-model="coord.motivation"
                  aria-label=" "
                ></textarea>
              </div>
            </div>
          </div>
          <br />
        </div>
        <!--   Coordonnées -->

        <!--  Education -->
        <div class="education" v-show="current_step == 2">
          <!--    formation -->
          <h5><i class="bi bi-book"></i> Formations</h5>
          <div v-for="(degree, index) in degrees" :key="index.$key">
            <add-degree :degree="degree" />

            <button
              class="btn btn-sm btn-complete add-btn pull-right"
              @click="addNewDegree('degree')"
            >
              <i class="bi bi-plus-lg" style="color: white; font-size: 80%"></i>
              Ajouter Formation
            </button>
            <button
              @click="cancel(degree, index, 'degree')"
              class="btn btn-sm btn-complete btn-secondary pull-left"
            >
              <i class="bi bi-trash" style="color: white; font-size: 80%"></i>
              Annuler
            </button>
          </div>

          <br /><br />
          <hr />
          <br />
          <!--    formation -->

          <!--   projet -->
          <h5><i class="bi bi-kanban"></i> Projets Academiques</h5>
          <div v-for="(project, index) in projects" :key="index.$key">
            <add-project :project="project" />

            <button
              @click="addNewDegree('project')"
              class="btn btn-sm btn-complete add-btn pull-right"
            >
              <i class="bi bi-plus-lg" style="color: white; font-size: 80%"></i>
              Ajouter Projet Académique
            </button>
            <button
              class="btn btn-sm btn-complete btn-secondary pull-left"
              @click="cancel(project, index, 'project')"
            >
              <i class="bi bi-trash" style="color: white; font-size: 80%"></i>
              Annuler
            </button>
          </div>
          <br /><br />
          <hr />
          <br />
          <!--   projet -->
        </div>
        <!--  Education -->

        <div class="experiences" v-show="current_step == 3"></div>
        <div class="distinctions" v-show="current_step == 4">
          <!-- Competences -->
          <h5><i class="bi bi-pencil"></i> Compétences</h5>
          <div v-for="(competence, index) in competences" :key="index.$key">
            <add-competence :competence="competence" />

            <button
              @click="addNewDegree('competence')"
              class="btn btn-sm btn-complete add-btn pull-right"
            >
              <i class="bi bi-plus-lg" style="color: white; font-size: 80%"></i>
              Ajouter Compétence
            </button>
            <button
              @click="cancel(competence, index, 'competence')"
              class="btn btn-sm btn-complete btn-secondary pull-left"
            >
              <i class="bi bi-trash" style="color: white; font-size: 80%"></i>
              Annuler
            </button>
          </div>
          <br /><br />
          <hr />
          <br />
          <!-- Competences -->

          <!--   langues -->
          <h5><i class="bi bi-translate"></i> Langues</h5>
          <div v-for="(language, index) in languages" :key="index.$key">
            <div class="card small-card">
              <div class="row">
                <div class="col-12">
                  <label for="" class="control-label">Langue 1:</label>
                  <input
                    id=""
                    type="text"
                    autofocus="autofocus"
                    class="form-control bg-light"
                    aria-label=" "
                    v-model="language.language"
                  />
                </div>
              </div>
              <br />
            </div>
            <br />
            <button
              @click="addNewDegree('language')"
              class="btn btn-sm btn-complete add-btn pull-right"
            >
              <i class="bi bi-plus-lg" style="color: white; font-size: 80%"></i>
              Ajouter Langue
            </button>
            <button
              @click="cancel(language, index, 'language')"
              class="btn btn-sm btn-complete btn-secondary pull-left"
            >
              <i class="bi bi-trash" style="color: white; font-size: 80%"></i>
              Annuler
            </button>
          </div>
          <br /><br />
          <hr />
          <br />

          <!--   langue -->

          <!--   quality -->
          <h5><i class="bi bi-clipboard-check"></i> Qualités</h5>
          <div v-for="(quality, index) in qualities" :key="index.$key">
            <div class="card small-card">
              <div class="row">
                <div class="col-12">
                  <label for="quality" class="control-label">Qualité 1:</label>
                  <input
                    id="quality"
                    type="text-area"
                    autofocus="autofocus"
                    class="form-control bg-light"
                    aria-label=" "
                    v-model="quality.quality"
                  />
                </div>
              </div>
              <br />
            </div>
            <br />
            <button
              @click="addNewDegree('quality')"
              class="btn btn-sm btn-complete add-btn pull-right"
            >
              <i class="bi bi-plus-lg" style="color: white; font-size: 80%"></i>
              Ajouter Qualité
            </button>
            <button
              @click="cancel(quality, index, 'quality')"
              class="btn btn-sm btn-complete btn-secondary pull-left"
            >
              <i class="bi bi-trash" style="color: white; font-size: 80%"></i>
              Annuler
            </button>
          </div>
          <br />
          <br />

          <!--   quality -->
        </div>
        <button class="btn  submit-btn btn-success" @click="advanceStep">
          <span v-if="max_step == 4 && !success">Enregistrer</span>
          <span v-else-if="max_step < 4">Suivant</span>
          <span v-else-if="success">Modifier</span>
        </button>
        <br />
      </div>
    </div>
    <div class="card big-card">
      <div class="row">
        <button
          class="btn  print-btn pull-left "
          :class="{ disabled: !success }"
          @click="print"
          style="width:20%"
        >
          <span>Imprimer Mon Cv</span>
        </button>
        <button
          class="btn  delete-btn btn-secondary pull-right "
          style="width:20%"
          :class="{ disabled: !success }"
          @click="deleteCV"
        >
          <span>Supprimer Mon Cv</span>
        </button>
      </div>
    </div>
    <br /><br /><br />
    <Footer></Footer>
  </div>
</template>
<script>
import CandidateNavbar from "@/components/Navbars/CandidateNavbar.vue";
import AddDegree from "../../components/Cv/AddDegree.vue";
import AddProject from "../../components/Cv/AddProject.vue";
import AddCompetence from "../../components/Cv/AddCompetence.vue";
import ApiService from "../../services/api.service";
import Footer from "@/components/Footer.vue";
export default {
  name: "Cv",
  components: {
    CandidateNavbar,
    Footer,
    AddDegree,
    AddProject,
    AddCompetence,
  },
  data() {
    return {
      coord: {
        first_name: "",
        last_name: "",
        email: localStorage.email,
        gender: "",
        mobile_number: "",
        nationality: "",
        date_of_birth: "",
        motivation: "",
        speciality:"",
      },
      degrees: [
        {
          degree_title: "",
          organism: "",
          organism_city: "",
          degree_start_date: "",
          degree_end_date: "",
          degree_description: "",
        },
      ],
      projects: [
        {
          project_title: "",
          project_description: "",
          master_project: "",
          project_start_date: "",
          project_end_date: "",
        },
      ],
      competences: [
        {
          competence: "",
          competence_description: "",
        },
      ],
      languages: [{ language: "" }],
      qualities: [{ quality: "" }],

      current_step: 1,
      max_step: 1,
      erros: [],
      success: false,
      prepare: true,
    };
  },
  mounted() {
    ApiService.get(this.$appUrl + "/api/candidate/get-candidate")
      .then((response) => {
        this.coord = response.data.candidate
        this.coord.email = response.data.email
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });

    if (localStorage.getItem("degrees")) {
      this.degrees = JSON.parse(localStorage.getItem("degrees"));
    }
    if (localStorage.success) {
      this.success = localStorage.success;
    }
  },
  methods: {
    advanceStep() {
      if (this.max_step == 4) {
        this.success = true;
        this.prepare = false;
        return this.save();
      }
      this.current_step++;
      if (this.max_step < this.current_step) {
        this.max_step = this.current_step;
      }
    },

    goToStep(value) {
      this.current_step = value;
    },

    addNewDegree(type) {
      switch (type) {
        case "degree":
          this.degrees.push({
            degree_title: "",
            organism: "",
            organism_city: "",
            degree_start_date: "",
            degree_end_date: "",
            degree_description: "",
          });
          break;
        case "project":
          this.projects.push({
            project_title: "",
            project_description: "",
            master_project: "",
            project_start_date: "",
            project_end_date: "",
          });
          break;

        case "competence":
          this.competences.push({
            competence: "",
            competence_description: "",
          });
          break;

        case "language":
          this.languages.push({
            language: "",
          });
          break;

        case "quality":
          this.qualities.push({
            quality: "",
          });
          break;
      }
    },

    cancel(item, index, type) {
      switch (type) {
        case "degree":
          if (index === 0) {
            this.degrees[index].degree_title = "";
            this.degrees[index].organism = "";
            this.degrees[index].organism_city = "";
            this.degrees[index].degree_start_date = "";
            this.degrees[index].degree_end_date = "";
            this.degrees[index].degree_description = "";
          } else {
            this.degrees.pop(item);
          }
          break;
        case "project":
          if (index === 0) {
            this.projects[index].project_title = "";
            this.projects[index].project_description = "";
            this.projects[index].master_project = "";
            this.projects[index].project_start_date = "";
            this.projects[index].project_end_date = "";
          } else {
            this.projects.pop(item);
          }
          break;
        case "competence":
          if (index === 0) {
            this.competences[index].competence = "";
            this.competences[index].competence_description = "";
          } else {
            this.competences.pop(item);
          }
          break;

        case "language":
          if (index === 0) {
            this.languages[index].language = "";
          } else {
            this.languages.pop(item);
          }
          break;

        case "quality":
          if (index === 0) {
            this.qualities[index].quality = "";
          } else {
            this.qualities.pop(item);
          }
          break;
      }
    },
    save() {
      const data = {
        degrees: this.degrees,
        projects: this.projects,
        first_name : this.coord.first_name,
        last_name : this.coord.last_name,
        email : this.coord.email,
        gender : this.coord.gender,
        mobile_number : this.coord.mobile_number,
        date_of_birth : this.coord.date_of_birth,
        nationality : this.coord.nationality,
        speciality : this.coord.speciality,
        motivation: this.coord.motivation,
        competences:  this.competences,
        languages: this.languages,
        qualities: this.qualities,
        /*   token: this.$store.token, */
      };

      ApiService.post(this.$appUrl + "/api/candidate/store-cv", data)
        .then(() => {
          localStorage.setItem("degrees", JSON.stringify(this.degrees));
          this.success = true;
          localStorage.success = this.success;
          this.$toast.success("Votre cv a été bien enregistré!");
        })
        .catch((error) => {
          console.log(error);
        });
    },
    print() {
      window.print();
    },
    deleteCV() {
      this.degrees = [
        {
          degree_title: "",
          organism: "",
          organism_city: "",
          degree_start_date: "",
          degree_end_date: "",
          degree_description: "",
        },
      ];
      localStorage.removeItem("degrees");
      this.success = false;
      this.$toast.info("Votre cv a été supprimé!");
    },
  },
};
</script>

<style scoped>
.big-card {
  width: 55%;
  display: flex;
  text-align: left;
  justify-content: center;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  margin-top: 2%;

  height: auto;
}
a:hover {
  color: #dc143c;
}
/* .shadow-danger{
 color: #dc143c;
} */
.print-btn {
  margin-bottom: 1%;
  margin-top: 1%;
  margin-left: 2.5%;
  background-color: #dc143c;
  color: white;
}
.delete-btn {
  margin-bottom: 1%;
  margin-right: 0%;
  margin-left: 55%;
  margin-top: 1%;
}
hr {
  display: block;
  margin: auto;
  width: 90%;
}
</style>
