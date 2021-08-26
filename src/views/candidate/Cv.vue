<template>
  <div class="contenu">
    <div class="navigation">
      <candidate-navbar> </candidate-navbar>
    </div>
    <div class="card big-card">
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
          <div class="card small-card">
            <div class="row">
              <div class="col-12">
                <label for="degree_title" class="control-label"
                  >Formation:</label
                >
                <input
                  id="degree_title"
                  type="text"
                  autofocus="autofocus"
                  class="form-control"
                  v-model="degree.degree_title"
                  aria-label=" "
                />
              </div>
            </div>
            <br />
            <div class="row">
              <div class="col-6">
                <label for="organism" class="control-label"
                  >Etablissement:</label
                >
                <input
                  id="organism"
                  type="text"
                  autofocus="autofocus"
                  class="form-control"
                  v-model="degree.organism"
                  aria-label=" "
                />
              </div>
              <div class="col-6">
                <label for="organism_city" class="control-label">Ville:</label>
                <input
                  id="organism_city"
                  type="text"
                  autofocus="autofocus"
                  class="form-control"
                  v-model="degree.organism_city"
                  aria-label=" "
                />
              </div>
            </div>
            <br />
            <div class="row">
              <div class="col-6">
                <label for="degree_start_date" class="control-label"
                  >Date Debut:</label
                >
                <input
                  id="degree_start_date"
                  type="date"
                  autofocus="autofocus"
                  class="form-control"
                  v-model="degree.degree_start_date"
                  aria-label=" "
                />
              </div>
              <div class="col-6">
                <label for="degree_end_date" class="control-label"
                  >Date Fin:</label
                >
                <input
                  id="degree_end_date"
                  type="date"
                  autofocus="autofocus"
                  class="form-control"
                  v-model="degree.degree_end_date"
                  aria-label=" "
                />
              </div>
            </div>
            <br />
            <div class="row">
              <div class="col-12">
                <label for="degree_description" class="control-label"
                  >Description:</label
                >
                <textarea
                  id="degree_description"
                  type="text-area"
                  autofocus="autofocus"
                  class="form-control"
                  v-model="degree.degree_description"
                  aria-label=" "
                ></textarea>
              </div>
            </div>
            <br />
          </div>
          <br />
          <button class="btn btn-sm btn-complete btn-success pull-right">
            <i class="bi bi-check-lg" style="color: white; font-size: 80%"></i>
            Terminé
          </button>
          <button
            type="reset"
            class="btn btn-sm btn-complete btn-secondary pull-right"
          >
            <i class="bi bi-trash" style="color: white; font-size: 80%"></i>
            Annuler
          </button>

          <br />
          <br />
          <button class="btn btn-md add-btn">
            <i class="bi bi-plus-lg" style="color: white; font-size: 80%"></i>
            Ajouter Formation
          </button>
          <br />
          <hr />
          <!--   
            -->
          <br />
          <!--    formation -->
          <!--   projet -->
          <h5><i class="bi bi-kanban"></i> Projets Academiques</h5>
          <div class="card small-card">
            <div class="row">
              <div class="col-12">
                <label for="project_title" class="control-label">Titre:</label>
                <input
                  id="project_title"
                  type="text"
                  autofocus="autofocus"
                  class="form-control"
                  v-model="academic_project.project_title"
                  aria-label=" "
                />
              </div>
            </div>
            <br />
            <div class="row">
              <div class="col-12">
                <label for="master_project" class="control-label"
                  >Encadrant:</label
                >
                <input
                  id="master_project"
                  type="text"
                  autofocus="autofocus"
                  class="form-control"
                  v-model="academic_master_project"
                  aria-label=" "
                />
              </div>
            </div>
            <br />
            <div class="row">
              <div class="col-6">
                <label for="project_start_date" class="control-label"
                  >Date Debut:</label
                >
                <input
                  id="project_start_date"
                  type="date"
                  autofocus="autofocus"
                  class="form-control"
                  v-model="academic_project.project_start_date"
                  aria-label=" "
                />
              </div>
              <div class="col-6">
                <label for="project_end_date" class="control-label"
                  >Date Fin:</label
                >
                <input
                  id="project_end_date"
                  type="date"
                  autofocus="autofocus"
                  class="form-control"
                  v-model="academic_project.project_end_date"
                  aria-label=" "
                />
              </div>
            </div>
            <br />
            <div class="row">
              <div class="col-12">
                <label for="project_description" class="control-label"
                  >Description:</label
                >
                <textarea
                  id="project_description"
                  type="text-area"
                  autofocus="autofocus"
                  class="form-control"
                  v-model="academic_project.project_description"
                  aria-label=" "
                ></textarea>
              </div>
            </div>
            <br />
          </div>
          <br />
          <button class="btn btn-sm btn-complete btn-success pull-right">
            <i class="bi bi-check-lg" style="color: white; font-size: 80%"></i>
            Terminé
          </button>
          <button
            type="reset"
            class="btn btn-sm btn-complete btn-secondary pull-right"
          >
            <i class="bi bi-trash" style="color: white; font-size: 80%"></i>
            Annuler
          </button>

          <br />
          <br />
          <button class="btn btn-md add-btn">
            <i class="bi bi-plus-lg" style="color: white; font-size: 80%"></i>
            Ajouter Projet Académique
          </button>
          <br />
          <!--   projet -->
        </div>
        <!--  Education -->
        <div class="experiences" v-show="current_step == 3"></div>
        <div class="distinctions" v-show="current_step == 4">
          <h5><i class="bi bi-pencil"></i> Compétences</h5>
          <div class="card small-card">
            <div class="row">
              <div class="col-12">
                <label for="competence" class="control-label"
                  >Compétence:</label
                >
                <input
                  id="competence"
                  type="text"
                  autofocus="autofocus"
                  class="form-control"
                  v-model="competence.competence"
                  aria-label=" "
                />
              </div>
            </div>
            <br />
            <div class="row">
              <div class="col-12">
                <label for="competence_description" class="control-label"
                  >Description:</label
                >
                <textarea
                  id="competence_description"
                  type="text-area"
                  autofocus="autofocus"
                  class="form-control"
                  v-model="competence.competence_description"
                  aria-label=" "
                ></textarea>
              </div>
            </div>
            <br />
          </div>
          <br />
          <button class="btn btn-sm btn-complete btn-success pull-right">
            <i class="bi bi-check-lg" style="color: white; font-size: 80%"></i>
            Terminé
          </button>
          <button
            type="reset"
            class="btn btn-sm btn-complete btn-secondary pull-right"
          >
            <i class="bi bi-trash" style="color: white; font-size: 80%"></i>
            Annuler
          </button>

          <br />
          <br />
          <button class="btn btn-md add-btn">
            <i class="bi bi-plus-lg" style="color: white; font-size: 80%"></i>
            Ajouter Compétence
          </button>
          <br />
          <hr />
          <!--   
            -->
          <br />
          <!--   langues -->
          <h5><i class="bi bi-translate"></i> Langues</h5>
          <div class="card small-card">
            <div class="row">
              <div class="col-4">
                <label for="" class="control-label">Langue 1:</label>
                <input
                  id=""
                  type="text"
                  autofocus="autofocus"
                  class="form-control"
                  aria-label=" "
                />
              </div>
              <div class="col-4">
                <label for="" class="control-label">Langue 2:</label>
                <input
                  id=""
                  type="text"
                  autofocus="autofocus"
                  class="form-control"
                  aria-label=" "
                />
              </div>
              <div class="col-4">
                <label for="" class="control-label">Langue 3:</label>
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
          </div>
          <br />
          <button class="btn btn-sm btn-complete btn-success pull-right">
            <i class="bi bi-check-lg" style="color: white; font-size: 80%"></i>
            Terminé
          </button>
          <button
            type="reset"
            class="btn btn-sm btn-complete btn-secondary pull-right"
          >
            <i class="bi bi-trash" style="color: white; font-size: 80%"></i>
            Annuler
          </button>

          <br />
          <br />
          <button class="btn btn-md add-btn">
            <i class="bi bi-plus-lg" style="color: white; font-size: 80%"></i>
            Ajouter Langue
          </button>
          <br />
          <hr />
          <!--   
            -->
          <br />
          <!--   langue -->
          <!--   quality -->
          <h5><i class="bi bi-clipboard-check"></i> Qualités</h5>
          <div class="card small-card">
            <div class="row">
              <div class="col-4">
                <label for="quality" class="control-label">Qualité 1:</label>
                <input
                  id="quality"
                  type="text-area"
                  autofocus="autofocus"
                  class="form-control"
                  aria-label=" "
                />
              </div>
              <div class="col-4">
                <label for="quality" class="control-label">Qualité 2:</label>
                <input
                  id="quality"
                  type="text-area"
                  autofocus="autofocus"
                  class="form-control"
                  aria-label=" "
                />
              </div>
              <div class="col-4">
                <label for="quality" class="control-label">Qualité 3:</label>
                <input
                  id="quality"
                  type="text-area"
                  autofocus="autofocus"
                  class="form-control"
                  aria-label=" "
                />
              </div>
            </div>
            <br />
          </div>
          <br />
          <button class="btn btn-sm btn-complete btn-success pull-right">
            <i class="bi bi-check-lg" style="color: white; font-size: 80%"></i>
            Terminé
          </button>
          <button
            type="reset"
            class="btn btn-sm btn-complete btn-secondary pull-right"
          >
            <i class="bi bi-trash" style="color: white; font-size: 80%"></i>
            Annuler
          </button>

          <br />
          <br />
          <button class="btn btn-md add-btn">
            <i class="bi bi-plus-lg" style="color: white; font-size: 80%"></i>
            Ajouter Qualité
          </button>
          <br />
          <!--   quality -->
        </div>
        <button class="btn submit-btn pull-right" @click="advanceStep">
          <span v-if="max_step == 4">Enregistrer</span>
          <span v-else>Suivant</span>
        </button>
      </div>
    </div>
  </div>

  <!-- <Footer></Footer> -->
</template>
<script>
import CandidateNavbar from "@/components/Navbars/CandidateNavbar.vue";
/* import Footer from "@/components/Footer.vue"; */
export default {
  name: "Cv",
  components: {
    CandidateNavbar,
    /*  Footer, */
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
      academic_project: {
        project_title: "",
        project_description: "",
        master_project: "",
        project_start_date: "",
        project_end_date: "",
      },
      competence: {
        competence: "",
        competence_description: "",
      },
      language: "",
      quality: "",
      current_step: 1,
      max_step: 1,
      erros: [],
      success: false,
    };
  },
  methods: {
    advanceStep() {
      if (this.max_step == 4) {
        return this.submitForm();
      }
      this.current_step++;
      if (this.max_step < this.current_step) {
        this.max_step = this.current_step;
      }
    },
    submitForm() {
      return;
    },
    goToStep(value) {
      this.current_step = value;
    },

    addDegree(){
      this.degrees.length++;
      
    }
  },
  mounted() {},
};
</script>

<style scoped>
.big-card {
  width: 80%;
  display: flex;
  text-align: left;
  justify-content: center;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  margin-top: 2%;
  box-shadow: #dc143c;
  height: auto;
}
.small-card {
  width: 95%;
  margin: auto;
  padding: 20px;
  box-shadow: #dc143c;
  height: auto;
}
h3 {
  text-align: center;
  color: #dc143c;
}
h5 {
  margin-left: 4%;
}
label {
  font-weight: 500;
  color: grey;
}
.add-btn {
  display: block;
  margin: auto;
  background-color: #dc143c;
  color: white;
}
.submit-btn {
  background-color: #dc143c;
  color: white;
  margin-right: 2.5%;
  margin-bottom: 1%;
}
.btn-complete {
  color: white;
  margin-right: 2.5%;
  margin-bottom: 1%;
}
hr {
  display: block;
  margin: auto;
  width: 85%;
}
a:link {
  color: #ccc;
}
/* lien visité */
a:visited {
  color: #095484;
}
/* souris sur le lien */
a:hover {
  color: #dc143c;
}
/* lien sélécté */
.icon {
  text-align: center;
  font-size: 50px;
}
</style>
