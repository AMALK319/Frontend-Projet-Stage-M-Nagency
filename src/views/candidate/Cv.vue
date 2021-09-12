<template>
  <div class="contenu">
    <div class="navigation">
      <candidate-navbar> </candidate-navbar>
    </div>
    <div class="container">
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
              >Spécialités</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              :class="{ disabled: max_step < 3, active: current_step == 3 }"
              @click.prevent="goToStep(3)"
              href="#"
              >Education</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              :class="{ disabled: max_step < 4, active: current_step == 4 }"
              @click.prevent="goToStep(4)"
              href="#"
              >Expériences Professionnelles</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              :class="{ disabled: max_step < 5, active: current_step == 5 }"
              @click.prevent="goToStep(5)"
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
                      <label for="" class="control-label"
                        >Nom de famille:</label
                      >
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
                    <option value="Mr">Mr</option>
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
                  <label for="" class="control-label">Addresse:</label>
                  <input
                    id=""
                    type="text"
                    autofocus="autofocus"
                    class="form-control"
                    aria-label=" "
                    v-model="coord.address"
                  />
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
                    v-model="motivation"
                    aria-label=" "
                  ></textarea>
                </div>
              </div>
            </div>
            <br />
          </div>
          <!--   Coordonnées -->
          <div class="speciality" v-show="current_step == 2">
            <div class="card small-card">
              <div class="row">
                <label class="col-sm-2 col-form-label">Spécialité 1:</label>
                <div class="col-sm-10">
                  <select
                    id=""
                    autofocus="autofocus"
                    class="form-control"
                    aria-label=" "
                    v-model="specialities[0].speciality"
                  >
                    <option selected></option>
                    <option value="Cloud Computing">Cloud Computing</option>
                    <option value="Réseaux">Réseaux</option>
                  </select>
                </div>
              </div>
              <br />
              <div class="row">
                <label class="col-sm-2 col-form-label">Spécialité 2:</label>
                <div class="col-sm-10">
                  <select
                    id=""
                    autofocus="autofocus"
                    class="form-control"
                    aria-label=" "
                    v-model="specialities[1].speciality"
                  >
                    <option selected></option>
                    <option value="Cloud Computing">Cloud Computing</option>
                    <option value="Réseaux">Réseaux</option>
                  </select>
                </div>
              </div>
              <br />
              <div class="row">
                <label class="col-sm-2 col-form-label">Spécialité 3:</label>
                <div class="col-sm-10">
                  <select
                    id=""
                    autofocus="autofocus"
                    class="form-control"
                    aria-label=" "
                    v-model="specialities[2].speciality"
                  >
                    <option selected></option>
                    <option value="Cloud Computing">Cloud Computing</option>
                    <option value="Réseaux">Réseaux</option>
                  </select>
                </div>
              </div>
              <br />
            </div>
          </div>
          <!--  Education -->
          <div class="education" v-show="current_step == 3">
            <!--    formation -->
            <h5><i class="bi bi-book"></i> Formations</h5>
            <div v-for="(degree, index) in degrees" :key="index.$key">
              <add-degree
                :degree="degree"
                :erros="erros"
              />

              <button
                @click="showModalDegree = true"
                class="btn btn-sm btn-complete btn-secondary pull-right"
              >
                <i class="bi bi-trash" style="color: white; font-size: 80%"></i>
                Supprimer
              </button>
              <!--  modal -->
              <div v-show="showModalDegree">
                <transition name="modal">
                  <div class="modal-mask">
                    <div class="modal-wrapper">
                      <div class="modal-dialog" role="document">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h4 class="modal-title">Suppression :</h4>
                          </div>
                          <div class="modal-body">
                            <p>
                              Êtes-vous sûr de vouloir supprimer cette formation
                              ?
                            </p>
                          </div>
                          <div class="modal-footer">
                            <button
                              type="button"
                              class="btn btn-secondary"
                              @click="showModalDegree = false"
                            >
                              Annuler
                            </button>
                            <button
                              type="button"
                              class="btn-sho btn"
                              @click="cancel(degree, index, 'degree')"
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
              <br /><br />
            </div>
            <button
              class="btn btn-sm add-btn btn-suc"
              @click="addNewDegree('degree')"
            >
              <i class="bi bi-plus-lg" style="color: white; font-size: 80%"></i>
              Ajouter Formation
            </button>

            <br />
            <hr />
            <br />
            <!--    formation -->

            <!--   projet -->
            <h5><i class="bi bi-kanban"></i> Projets Academiques</h5>
            <div v-for="(project, index) in projects" :key="index.$key">
              <add-project
                :project="project"
               
              />

              <button
                class="btn btn-sm btn-complete btn-secondary pull-right"
                @click="showModalProject = true"
              >
                <i class="bi bi-trash" style="color: white; font-size: 80%"></i>
                Supprimer
              </button>
              <!--  modal -->
              <div v-show="showModalProject">
                <transition name="modal">
                  <div class="modal-mask">
                    <div class="modal-wrapper">
                      <div class="modal-dialog" role="document">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h4 class="modal-title">Suppression :</h4>
                          </div>
                          <div class="modal-body">
                            <p>
                              Êtes-vous sûr de vouloir supprimer ce projet ?
                            </p>
                          </div>
                          <div class="modal-footer">
                            <button
                              type="button"
                              class="btn btn-secondary"
                              @click="showModalProject = false"
                            >
                              Annuler
                            </button>
                            <button
                              type="button"
                              class="btn-sho btn"
                              @click="cancel(project, index, 'project')"
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
              <br /><br />
            </div>
            <button
              class="btn btn-sm add-btn btn-suc"
              @click="addNewDegree('project')"
            >
              <i class="bi bi-plus-lg" style="color: white; font-size: 80%"></i>
              Ajouter Projet Académique</button
            ><br />
            <hr />
            <br />
            <!--   projet -->
          </div>
          <!--  Education -->

          <div class="experiences" v-show="current_step == 4"></div>
          <div class="distinctions" v-show="current_step == 5">
            <!-- Competences -->
            <h5><i class="bi bi-pencil"></i> Compétences</h5>
            <div v-for="(competence, index) in competences" :key="index.$key">
              <add-competence :competence="competence" />

              <button
                @click="showModalCompetence = true"
                class="btn btn-sm btn-complete btn-secondary pull-right"
              >
                <i class="bi bi-trash" style="color: white; font-size: 80%"></i>
                Supprimer
              </button>
              <!--  modal -->
              <div v-show="showModalCompetence">
                <transition name="modal">
                  <div class="modal-mask">
                    <div class="modal-wrapper">
                      <div class="modal-dialog" role="document">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h4 class="modal-title">Suppression :</h4>
                          </div>
                          <div class="modal-body">
                            <p>
                              Êtes-vous sûr de vouloir supprimer cette
                              compétence ?
                            </p>
                          </div>
                          <div class="modal-footer">
                            <button
                              type="button"
                              class="btn btn-secondary"
                              @click="showModalCompetence = false"
                            >
                              Annuler
                            </button>
                            <button
                              type="button"
                              class="btn-sho btn"
                              @click="cancel(competence, index, 'competence')"
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
              <br /><br />
            </div>
            <button
              @click="addNewDegree('competence')"
              class="btn btn-sm btn-suc add-btn"
            >
              <i class="bi bi-plus-lg" style="color: white; font-size: 80%"></i>
              Ajouter Compétence
            </button>
            <br />
            <hr />
            <br />
            <!-- Competences -->

            <!--   langues -->
            <h5><i class="bi bi-translate"></i> Langues</h5>
            <div v-for="(language, index) in languages" :key="index.$key">
              <div class="card small-card">
                <div class="row">
                  <div class="col-12">
                    <label for="" class="control-label">Langue :</label>
                    <input
                      id=""
                      type="text"
                      autofocus="autofocus"
                      class="form-control bg-light"
                      aria-label=" "
                      v-model="language.language"
                      required
                    />
                  </div>
                </div>
                <br />
              </div>
              <br />

              <button
                @click="showModalLanguage = true"
                class="btn btn-sm btn-complete btn-secondary pull-right"
              >
                <i class="bi bi-trash" style="color: white; font-size: 80%"></i>
                Supprimer
              </button>
              <!--  modal -->
              <div v-show="showModalLanguage">
                <transition name="modal">
                  <div class="modal-mask">
                    <div class="modal-wrapper">
                      <div class="modal-dialog" role="document">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h4 class="modal-title">Suppression :</h4>
                          </div>
                          <div class="modal-body">
                            <p>
                              Êtes-vous sûr de vouloir supprimer cette langue ?
                            </p>
                          </div>
                          <div class="modal-footer">
                            <button
                              type="button"
                              class="btn btn-secondary"
                              @click="showModalLanguage = false"
                            >
                              Annuler
                            </button>
                            <button
                              type="button"
                              class="btn-sho btn"
                              @click="cancel(language, index, 'language')"
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
              <br /><br />
            </div>
            <button
              @click="addNewDegree('language')"
              class="btn btn-sm btn-suc add-btn"
            >
              <i class="bi bi-plus-lg" style="color: white; font-size: 80%"></i>
              Ajouter Langue
            </button>
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
                    <label for="quality" class="control-label">Qualité :</label>
                    <input
                      id="quality"
                      type="text-area"
                      autofocus="autofocus"
                      class="form-control bg-light"
                      aria-label=" "
                      v-model="quality.quality"
                      required
                    />
                  </div>
                </div>
                <br />
              </div>
              <br />

              <button
                @click="showModalQuality = true"
                class="btn btn-sm btn-complete btn-secondary pull-right"
              >
                <i class="bi bi-trash" style="color: white; font-size: 80%"></i>
                Supprimer
              </button>
              <!--  modal -->
              <div v-show="showModalQuality">
                <transition name="modal">
                  <div class="modal-mask">
                    <div class="modal-wrapper">
                      <div class="modal-dialog" role="document">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h4 class="modal-title">Suppression :</h4>
                          </div>
                          <div class="modal-body">
                            <p>
                              Êtes-vous sûr de vouloir supprimer cette qualité ?
                            </p>
                          </div>
                          <div class="modal-footer">
                            <button
                              type="button"
                              class="btn btn-secondary"
                              @click="showModalQuality = false"
                            >
                              Annuler
                            </button>
                            <button
                              type="button"
                              class="btn-sho btn"
                              @click="cancel(quality, index, 'quality')"
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
              <br /><br />
            </div>
            <button
              @click="addNewDegree('quality')"
              class="btn btn-sm btn-suc add-btn"
            >
              <i class="bi bi-plus-lg" style="color: white; font-size: 80%"></i>
              Ajouter Qualité
            </button>
            <br />
            <br />

            <!--   quality -->
          </div>
          <br />
          <button
            class="btn btn-suc"
            :class="{
              'btn-success': coord.cv_created == 1 || success,
              'submit-btn': coord.cv_created == 0 && !success,
            }"
            @click="advanceStep"
          >
            <span v-if="max_step == 5 && coord.cv_created == 0"
              >Enregistrer</span
            >
            <span v-else-if="max_step < 5">Suivant</span>
            <span v-else-if="coord.cv_created == 1 || success">Modifier</span>
          </button>
          <br />
        </div>
      </div>
      <div class="card tools-card big-card" v-show="coord.cv_created == 1 || success">
        <div class="row">
          <button
            class="btn print-btn pull-left"
            @click="print"
            style="width: 20%"
          >
            <span>Imprimer Mon Cv</span>
          </button>
          <button
            class="btn delete-btn btn-secondary pull-right"
            style="width: 20%"
            @click="deleteCV"
          >
            <span>Supprimer Mon Cv</span>
          </button>
        </div>
      </div>
    </div>
   <!--  <br /><br /><br /> -->
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
        email: "",
        gender: "",
        mobile_number: "",
        nationality: "",
        date_of_birth: "",
        address: "",
        cv_created: 0,
      },
      motivation: "",
      specialities: [
        { speciality: "" },
        { speciality: "" },
        { speciality: "" },
      ],
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
      success: false,
      showModalDegree: false,
      showModalProject: false,
      showModalCompetence: false,
      showModalLanguage: false,
      showModalQuality: false,
      showModalSubmit: false,

     erros : {},
    };
  },
  mounted() {
    ApiService.get(this.$appUrl + "/api/candidate/get-candidate")
      .then((response) => {
        this.coord = response.data.candidate;
        console.log(this.coord);
      })
      .catch((error) => {
        console.log(error);
      });
    ApiService.get(this.$appUrl + "/api/candidate/show-cv")
      .then((response) => {
        if (this.coord.cv_created == 1) {
          this.degrees = response.data.degrees;
          this.projects = response.data.projects;
          this.competences = response.data.competences;
          this.qualities = response.data.qualities;
          this.languages = response.data.languages;
          this.specialities = response.data.specialities;
          this.specialities[0].speciality =
            response.data.specialities[0].category_id;
          this.specialities[1].speciality =
            response.data.specialities[1].category_id;
          this.specialities[2].speciality =
            response.data.specialities[2].category_id;
          this.motivation = response.data.motivation.motivation;
          console.log(response.data);
        }
        this.coord = response.data.candidate;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    advanceStep() {
      if (this.max_step == 5) {
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
        /*  case "speciality":
          this.specialities.push({
            speciality: "",
          });
          break; */
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
            this.showModalDegree = false;
          } else {
            ApiService.post(
              this.$appUrl + "/api/candidate/delete-degree",
              this.degrees[index]
            )
              .then((response) => {
                console.log(response.data);
              })
              .catch((error) => {
                console.log(error);
              });
            this.degrees.pop(item);
            this.showModalDegree = false;
          }
          break;
        case "project":
          if (index === 0) {
            this.projects[index].project_title = "";
            this.projects[index].project_description = "";
            this.projects[index].master_project = "";
            this.projects[index].project_start_date = "";
            this.projects[index].project_end_date = "";
            this.showModalProject = false;
          } else {
            ApiService.post(
              this.$appUrl + "/api/candidate/delete-project",
              this.projects[index]
            )
              .then((response) => {
                console.log(response.data);
              })
              .catch((error) => {
                console.log(error);
              });
            this.projects.pop(item);
            this.showModalProject = false;
          }
          break;
        case "competence":
          if (index === 0) {
            this.competences[index].competence = "";
            this.competences[index].competence_description = "";
            this.showModalCompetence = false;
          } else {
            ApiService.post(
              this.$appUrl + "/api/candidate/delete-competence",
              this.competences[index]
            )
              .then((response) => {
                console.log(response.data);
              })
              .catch((error) => {
                console.log(error);
              });
            this.competences.pop(item);
            this.showModalCompetence = false;
          }
          break;
        case "language":
          if (index === 0) {
            this.languages[index].language = "";
            this.showModalLanguage = false;
          } else {
            ApiService.post(
              this.$appUrl + "/api/candidate/delete-language",
              this.languages[index]
            )
              .then((response) => {
                console.log(response.data);
              })
              .catch((error) => {
                console.log(error);
              });
            this.languages.pop(item);
            this.showModalLanguage = false;
          }
          break;
        case "quality":
          if (index === 0) {
            this.qualities[index].quality = "";
            this.showModalQuality = false;
          } else {
            ApiService.post(
              this.$appUrl + "/api/candidate/delete-quality",
              this.qualities[index]
            )
              .then((response) => {
                console.log(response.data);
              })
              .catch((error) => {
                console.log(error);
              });
            this.qualities.pop(item);
            this.showModalQuality = false;
          }
          break;
      }
    },
    save() {
      const data = {
        degrees: this.degrees,
        projects: this.projects,
        specialities: this.specialities,
        cv_created: this.coord.cv_created,
        first_name: this.coord.first_name,
        last_name: this.coord.last_name,
        email: this.coord.email,
        gender: this.coord.gender,
        mobile_number: this.coord.mobile_number,
        date_of_birth: this.coord.date_of_birth,
        nationality: this.coord.nationality,
        address: this.coord.address,
        motivation: this.motivation,
        competences: this.competences,
        languages: this.languages,
        qualities: this.qualities,
        /*   token: this.$store.token, */
      };
      if (this.cv_created == 1) {
        ApiService.post(this.$appUrl + "/api/candidate/update-cv", data)
          .then(() => {
            this.erros = {};
            this.$toast.success("Votre cv a été bien modifié!");
          })
          .catch((error) => {
             this.erros = error.response.data.errors;
            this.$toast.error(
              "Votre cv n'a pas été modifié! Veuillez entrer vos données correctement."
            );
            console.log(error);
          });
      } else {
        ApiService.post(this.$appUrl + "/api/candidate/store-cv", data)
          .then(() => {
           this.erros = {};
           this.success = true;
            this.$toast.success("Votre cv a été bien enregistré!");
          })
          .catch((error) => {
             this.erros = error.response.data.errors;
            this.$toast.error(
              "Votre cv n'a pas été enregistré! Veuillez entrer vos données correctement."
            );
            console.log(error);
          });
      }
    },
    print() {
      window.print();
    },
    deleteCV() {},
  },
};
</script>

<style scoped>
.container {
  margin-top: 9%;
   margin-bottom: 10%;
}
.tools-card {
 /*  margin-bottom: 10%; */
}
.big-card {
  width: 80%;
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
