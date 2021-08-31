<template>
  <div class="content">
    <div id="navigation">
      <enterprise-navbar></enterprise-navbar>
    </div>
    <br /><br />
    <div class="container">
      <div class="card shadow shadow-danger shadow-intensity-md big-card">
        <div class="row">
          <div class="col-5">
            <br />
            <img
              class="rounded-circle center"
              style="max-width:50%; max-height:50%"
              src="../../assets/photo.jpg"
              alt=""
            />
            <br />
            <h2 class="text-center">
              Cv de {{ candidate.first_name }}.{{ candidate.last_name[0] }}
            </h2>
            <br />
            <div class="contact">
              <div class="contact-flex">
                <i class="bi bi-briefcase-fill"></i>
                <p></p>
              </div>
              <br />
              <div class="contact-flex">
                <i class="bi bi-geo-alt"></i>
                <p></p>
              </div>
              <br />
              <div class="contact-flex">
                <i class="bi bi-calendar2-date"></i>
                <p></p>
              </div>
            </div>
          </div>

          <div class="col-7">
            <div class="card">
              <h5>
                <i class="bi bi-book"></i> Formations
                <i
                  class="bi bi-sty  pull-right"
                  :class="{
                    'bi-arrow-down-circle-fill': !toggleDegree,
                    'bi-arrow-up-circle-fill': toggleDegree,
                  }"
                  @click="show('degree')"
                ></i>
              </h5>
            </div>

            <div class="card cont-card" v-show="toggleDegree">
              <div v-for="(degree, index) in degrees" :key="index.$key">
                <div class="row">
                  <h6 style="font-weight:bold">
                    {{ degree.degree_title }}
                    <div class="dates pull-right">
                      <span
                        >{{ degree.degree_start_date }} :
                        {{ degree.degree_end_date }}</span
                      >
                    </div>
                  </h6>
                  <div class="row">
                    <span
                      class="pull-right"
                      style="color:grey; font-size:medium;"
                      >{{ degree.organism }}, {{ degree.organism_city }}</span
                    >
                  </div>
                </div>
                <div class="row">
                  <p>
                    {{ degree.degree_description }}
                  </p>
                </div>
                <hr />
                <br />
              </div>
            </div>

            <div class="card">
              <h5>
                <i class="bi bi-kanban"></i> Projets Académiques
                <i
                  class="bi bi-sty  pull-right"
                  :class="{
                    'bi-arrow-down-circle-fill': !toggleProject,
                    'bi-arrow-up-circle-fill': toggleProject,
                  }"
                  @click="show('project')"
                ></i>
              </h5>
            </div>
            <div class="card cont-card" v-show="toggleProject">
              <div v-for="(project, index) in projects" :key="index.$key">
                <div class="row">
                  <h6 style="font-weight:bold">
                    {{ project.project_title }}
                    <div class="dates pull-right">
                      <span
                        >{{ degree.project_start_date }} :
                        {{ degree.project_end_date }}</span
                      >
                    </div>
                  </h6>
                </div>
                <div class="row">
                  <p>
                    {{ project.degree_description }}
                  </p>
                </div>
                <hr />
                <br />
              </div>
            </div>
            <div class="card">
              <h5>
                <i class="bi bi-briefcase"></i> Expériences Professionnelles
                <i
                  class="bi bi-sty  pull-right"
                  :class="{
                    'bi-arrow-down-circle-fill': !up,
                    'bi-arrow-up-circle-fill': up,
                  }"
                  @click="show"
                ></i>
              </h5>
            </div>

            <div class="card">
              <h5>
                <i class="bi bi-patch-check"></i> Certifications
                <i
                  class="bi bi-sty  pull-right"
                  :class="{
                    'bi-arrow-down-circle-fill': !up,
                    'bi-arrow-up-circle-fill': type,
                  }"
                  @click="show"
                ></i>
              </h5>
            </div>

            <div class="card">
              <h5>
                <i class="bi bi-laptop"></i> Compétences
                <i
                  class="bi bi-sty  pull-right"
                  :class="{
                    'bi-arrow-down-circle-fill': !toggleCompetence,
                    'bi-arrow-up-circle-fill': toggleCompetence,
                  }"
                  @click="show('competence')"
                ></i>
              </h5>

              <div class="cont" v-show="toggleCompetence">
                <div
                  v-for="(competence, index) in competences"
                  :key="index.$key"
                >
                  <div class="row">
                    <li style="font-weight:bold ; color:rgb(70, 69, 69);">
                      {{ competence.competence }} :
                      <span style="font-weight:normal; color:black">{{
                        competence.competence_description
                      }}</span>
                    </li>
                  </div>
                  <br />
                </div>
              </div>
            </div>

            <div class="card">
              <h5>
                <i class="bi bi-translate"></i> Langues
                <i
                  class="bi bi-sty  pull-right"
                  :class="{
                    'bi-arrow-down-circle-fill': !toggleLanguage,
                    'bi-arrow-up-circle-fill': toggleLanguage,
                  }"
                  @click="show('language')"
                ></i>
              </h5>
              <div class="cont" v-show="toggleLanguage">
                <div v-for="(language, index) in languages" :key="index.$key">
                  <div class="row">
                    <li style="font-weight:bold ; color:rgb(70, 69, 69);">
                      {{ language.language }}
                    </li>
                  </div>
                  <br />
                </div>
              </div>
            </div>

            <div class="card">
              <h5>
                <i class="bi bi-clipboard-check"></i> Qualités
                <i
                  class="bi bi-sty  pull-right"
                  :class="{
                    'bi-arrow-down-circle-fill': !toggleQuality,
                    'bi-arrow-up-circle-fill': toggleQuality,
                  }"
                  @click="show('quality')"
                ></i>
              </h5>
              <div class="cont" v-show="toggleQuality">
                <div v-for="(quality, index) in qualities" :key="index.$key">
                  <div class="row">
                    <li style="font-weight:bold  ; color:rgb(70, 69, 69);">
                      {{ quality.quality }}
                    </li>
                  </div>
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="footer">
      <br /><br /><br />
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import ApiService from "../../services/api.service";
import EnterpriseNavbar from "@/components/Navbars/EnterpriseNavbar.vue";

import Footer from "@/components/Footer.vue";

export default {
  name: "Candidate",
  components: {
    EnterpriseNavbar,
    Footer,
  },
  data() {
    return {
      candidate: null,
      degrees: null,
      projects: null,
      competences: null,
      languages: null,
      qualities: null,
      token: this.$route.params.token,
      toggleDegree: false,
      toggleCompetence: false,
      toggleQuality: false,
      toggleLanguage: false,
      toggleProject: false,
      type: null,
    };
  },
  mounted() {
    ApiService.get(this.$appUrl + "/api/enterprise/get-candidate/" + this.token)
      .then((response) => {
        this.candidate = response.data.candidate;
        this.degrees = response.data.degrees;
        this.projects = response.data.projects;
        this.competences = response.data.competences;
        this.languages = response.data.languages;
        this.qualities = response.data.qualities;

        console.log(response.data);
      })
      .catch((error) => console.log(error));
  },
  methods: {
    show(type) {
      switch (type) {
        case "degree":
          if (this.toggleDegree == false) {
            this.toggleDegree = true;
          } else {
            this.toggleDegree = false;
          }
          break;

        case "competence":
          if (this.toggleCompetence == false) {
            this.toggleCompetence = true;
          } else {
            this.toggleCompetence = false;
          }
          break;
        case "language":
          if (this.toggleLanguage == false) {
            this.toggleLanguage = true;
          } else {
            this.toggleLanguage = false;
          }
          break;
        case "quality":
          if (this.toggleQuality == false) {
            this.toggleQuality = true;
          } else {
            this.toggleQuality = false;
          }
          break;
        case "project":
          if (this.toggleProject == false) {
            this.toggleProject = true;
          } else {
            this.toggleProject = false;
          }
          break;
      }
    },
  },
};
</script>

<style scoped>
/* .container {
  width: 100%;
  background-color: #dc143c;
} */
.big-card {
  width: 95%;
  display: flex;
  text-align: left;
  justify-content: center;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  margin-top: 2%;
  padding: 4%;
  height: auto;
}
.card {
  padding-top: 2%;
  margin-top: 4%;
}
.bi-sty {
  margin-right: 3%;
  color: rgb(49, 49, 49);
  font-size: 100%;
}
.cont-card {
  padding: 4%;
}
.cont {
  padding-left: 4%;
}
.dates {
  font-size: small;
  color: grey;
}
hr {
  width: 95%;
  display: block;
  margin: auto;
}
.center {
  display: block;
  margin: auto;
}
</style>
