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
                      aria-label=" "
                    />
                  </div>
                  <div class="col-6">
                    <label for="" class="control-label">Nom de famille:</label>
                    <input
                      type="text"
                      autofocus="autofocus"
                      class="form-control"
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
                />
              </div>
              <div class="col-6">
                <label for="" class="control-label">Spécialité:</label>
                <select
                  id=""
                  autofocus="autofocus"
                  class="form-control"
                  aria-label=" "
                >
                  <option selected>Développement Full-Stack</option>
                  <option value="1">Réseaux et Télécommunicatons</option>
                  <option value="1">Data</option>
                  <option value="1">Cloud</option>
                </select>
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
        <button
          class="btn"
          :class="{
            'btn-success': success,
            'btn-suc': success,
            'submit-btn': prepare,
          }"
          @click="advanceStep"
        >
          <span v-if="max_step == 4"
            >Enregistrer
            <i class="bi bi-save" style="color: white; font-size: 90%"></i
          ></span>
          <span v-else
            >Suivant
            <i
              class="bi bi-arrow-right-circle"
              style="color: white; font-size: 90%"
            ></i
          ></span>
        </button>
        <br />
      </div>
    </div>
    <br />
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
    if (localStorage.getItems("degrees") && localStorage.getItems("projects")) {
      this.degrees = JSON.parse(localStorage.getItem("degrees"));
      this.projects = JSON.parse(localStorage.getItem("projects"));
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
        competences: this.competences,
        languages: this.languages,
        qualities: this.qualities,
        /*   token: this.$store.token, */
      };

      ApiService.post(this.$appUrl + "/api/candidate/store-cv", data)
        .then((response) => {
          console.log(response);
          
          localStorage.setItem("degrees" , JSON.stringify(this.degrees));
         /*  localStorage.setItem("projects"); */
        })
        .catch((error) => {
          console.log(error);
        });
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
</style>
