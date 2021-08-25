<template>
  <div class=" contenu">
    <div id="navb">
      <nav class="navbar navbar-expand-lg  bg-light ">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">G.Employees</a>
        </div>
      </nav>
    </div>
    <div class="card">
      <div class="card-body">
        <h3>Inscription</h3>
        <div class="row">
          <div
            class="col-4"
            :class="['form-group', erros.first_name ? 'has-error' : '']"
          >
            <label for="first_name" class=" control-label">Prénom :</label>
            <input
              id="first_name"
              type="text"
              autofocus="autofocus"
              class="form-control"
              v-model="register.first_name"
              aria-label="First name"
            />
            <span
              class="text-danger"
              v-if="erros.first_name"
              :class="['label label-danger']"
              >{{ erros.first_name[0] }}</span
            >
          </div>
          <div class="col-4">
            <label>Nom :</label>
            <input
              type="text"
              v-model="register.last_name"
              class="form-control"
              aria-label="Last name"
            />
          </div>
          <div class="col-4">
            <label>Email :</label>
            <input
              type="email"
              class="form-control"
              aria-label="Email address"
              v-model="register.email"
            />
          </div>
        </div>
        <br />
        <div class="row">
          <div class="col">
            <label>Password :</label>
            <input
              type="password"
              class="form-control"
              aria-label="Password"
              v-model="register.password"
            />
          </div>
          <div class="col">
            <label>Confirme Password :</label>
            <input
              type="password"
              class="form-control"
              aria-label="Password"
              v-model="register.password_confirmation"
            />
          </div>
        </div>
        <br />
        <div class="row">
          <div class="col">
            <label>Fonction :</label>
            <input
              type="text"
              v-model="register.mission"
              class="form-control"
              aria-label="Mission"
            />
          </div>
          <div class="col">
            <label>Numéro de Téléphone :</label>
            <input
              type="text"
              v-model="register.mobile_number"
              class="form-control"
              aria-label="Numéro de Téléphone"
            />
          </div>
        </div>
        <br />
        <div class="row">
          <div class="col">
            <label>Entreprise :</label>
            <input
              type="text"
              v-model="register.company_name"
              class="form-control"
              aria-label="Entreprise"
            />
          </div>
          <div class="col">
            <label>Adresse d'Entreprise :</label>
            <input
              type="text-area"
              v-model="register.company_address"
              class="form-control"
              aria-label=" "
            />
          </div>
        </div>
        <br />
        <span v-if="success" class="text-success" :class="['label label-success']"
          >Veuillez consulter le mail envoyé pour confirmer votre e-mail!</span
        >
        <br>
        <button
          type="submit"
          class="btn  btn-md btn-block pull-right"
          style=" background-color : #fc581c ; color: white ; width : 15%  "
          @click="registerIt"
        >
          S'inscrire
        </button>

        <p class="forgot-password pull-left" style="color:grey">
          Déjà inscrit(e) <a href="/login"> Se Connecter?</a>
        </p>
      </div>
    </div>
    <br />
  <!--   <Footer></Footer> -->
  </div>
</template>
<script>
/* import EnterpriseNavbar from "@/components/Navbars/EnterpriseNavbar.vue"; */
/* import Footer from "@/components/Footer.vue"; */
import axios from "axios";
export default {
  name: "EnterpriseRegister",
  components: {
 /*    EnterpriseNavbar, */
 /*    Footer, */
  },
  data() {
    return {
      register: {
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        password_confirmation: "",
        mission: "",
        mobile_number: "",
        company_name: "",
        company_address: "",
      },
      erros: [],
      success: false,
    };
  },
  methods: {
    registerIt() {
      axios
        .post(
          "http://127.0.0.1:8000/api/company-representative-register",
          this.register
        )
        .then((response) => {
          console.log(response);
          this.erros = [];
          this.success = true;
          /*      let token = response.data.user.api_token;
          localStorage.setItem("token", token); */
        })
        .catch((error) => {
          this.erros = error.response.data.errors;
          this.success = false;
        });
    },
  },
  mounted() {},
};
</script>

<style scoped>
.content {
}
.navbar-brand {
  color: #fc581c;
  font-size: 30px;
  font-family: "Comic Sans MS", cursive;
  padding-left: 120px;
}

.card {
  border-radius: 3%;
  width: 55%;
  display: flex;
  text-align: left;
  justify-content: center;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  margin-top: 2%;
  box-shadow: #fc581c;
  height: auto;
}
h3 {
  text-align: center;
  color: #fc581c;
}
label {
  font-weight: 500;
  color: grey;
}
</style>