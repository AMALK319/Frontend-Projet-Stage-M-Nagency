<template>
  <div class=" content">
    <div id="navb">
      <nav class="navbar navbar-expand-lg  bg-light ">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">G.Employees</a>
          <a class="link pull-right" href="/login" >  Se connecter</a>

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
              @change="clear"
              aria-label="First name"
              required
            />
            <span
              class="text-danger"
              v-if="erros.first_name"
              :class="['label label-danger']"
              >{{ erros.first_name[0] }}</span
            >
          </div>
          <div
            class="col-4"
            :class="['form-group', erros.last_name ? 'has-error' : '']"
          >
            <label>Nom :</label>
            <input
              type="text"
              v-model="register.last_name"
              @change="clear"
              class="form-control"
              aria-label="Last name"
              required
            />
            <span
              class="text-danger"
              v-if="erros.last_name"
              :class="['label label-danger']"
              >{{ erros.last_name[0] }}</span
            >
          </div>
          <div
            class="col-4"
            :class="['form-group', erros.email ? 'has-error' : '']"
          >
            <label>Email :</label>
            <input
              type="email"
              class="form-control"
              aria-label="Email address"
              v-model="register.email"
              @change="clear"
              required
            />
            <span
              class="text-danger"
              v-if="erros.email"
              :class="['label label-danger']"
              >{{ erros.email[0] }}</span
            >
          </div>
        </div>
        <br />
        <div class="row">
          <div
            class="col"
            :class="['form-group', erros.password ? 'has-error' : '']"
          >
            <label>Password :</label>
            <input
              type="password"
              class="form-control"
              aria-label="Password"
              v-model="register.password"
              @change="clear"
              required
            />
            <span
              class="text-danger"
              v-if="erros.password"
              :class="['label label-danger']"
              >{{ erros.password[0] }}</span
            >
          </div>
          <div
            class="col"
            :class="[
              'form-group',
              erros.password_confirmation ? 'has-error' : '',
            ]"
          >
            <label>Confirme Password :</label>
            <input
              type="password"
              class="form-control"
              aria-label="Password"
              v-model="register.password_confirmation"
              @change="clear"
              required
            />
            <span
              class="text-danger"
              v-if="erros.password_confirmation"
              :class="['label label-danger']"
              >{{ erros.password_confirmation[0] }}</span
            >
          </div>
        </div>
        <br />
        <div class="row">
          <div class="col">
            <label>Nationalité :</label>
            <input
              type="text"
              v-model="register.nationality"
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

        <button
          type="submit"
          class="btn  btn-md btn-block pull-right"
          style=" background-color :#DC143C ; color: white ; width : 15%  "
          @click="registerCandidate"
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
/* import EnterpriseNavbar from "@/components/Navbars/EnterpriseNavbar.vue";
import Footer from "@/components/Footer.vue"; */

import axios from "axios";

export default {
  name: "CandidateRegister",
  data() {
    return {
      register: {
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        password_confirmation: "",
        nationality: "",
        mobile_number: "",
      },
      erros: [],
      success: true,
    };
  },
  methods: {
    registerCandidate() {
      axios
        .post(this.$appUrl + "/api/candidate-register", this.register)
        .then((response) => {
          console.log(response);
          this.erros = [];
          this.success = true;
          this.$toast.success(
            "Veuillez consulter le mail envoyé pour confirmer votre e-mail!"
          );
        })
        .catch((error) => {
          this.erros = error.response.data.errors;
          this.success = false;
        });
    },
    clear() {
      this.erros = [];
      this.success = true;
    },
  },
};
</script>

<style scoped>
.navbar-brand {
  color: #dc143c;
  font-size: 30px;
  font-family: "Comic Sans MS", cursive;
  padding-left: 120px;
}

.card {
  
  width: 60%;
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
h3 {
  text-align: center;
  color: #dc143c;
}
label {
  font-weight: 500;
  color: grey;
}
.link{
  text-decoration: none;
  margin-right: 2%;
  font-size: large;
 font-family: "Comic Sans MS", cursive;
}
</style>
