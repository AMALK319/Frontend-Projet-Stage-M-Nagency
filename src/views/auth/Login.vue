<template>
  <div class="content">
    <div id="navb">
      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">G.Employees</a>
        </div>
      </nav>
    </div>
    <br />
    <div class="card">
      <div class="card-body">
        <h3>Connexion</h3>
        <br />

        <div>
          <div class="form-group">
            <label for="email" class="control-label">Email address</label>
            <input
              id="firstName"
              autofocus="autofocus"
              aria-label="email"
              type="email"
              v-model="login.email"
                 @change="clear"
              class="form-control form-control-lg"
              :class="{
                'border-danger': hasError,
                'text-danger': hasError,
              }"
              required
            />
            <span class="text-danger" v-if="erreur">{{ erreur }}</span>
          </div>
          <br />
          <div class="form-group">
            <label>Password</label>
            <input
              type="password"
              autofocus="autofocus"
              aria-label=""
              v-model="login.password"
              @change="clear"
              class="form-control form-control-lg"
              required
              :class="{
                'border-danger': hasError,
                'text-danger': hasError,
              }"
            />
          </div>
          <br />
          <button
            type="button"
            class="btn btn-lg btn-block"
            @click="loginIt"
            style="width: 100%; background-color: #dc143c; color: white"
          >
            Se connecter
          </button>

          <p class="forgot-password text-right mt-2 mb-4">
            <a href="/forgot-password">Mot de passe oublié?</a>
          </p>

          <div class="social-icons">
            <ul>
              <li>
                <a href="#"
                  ><i class="bi bi-google" style="color: rgb(90, 4, 4)"></i
                ></a>
              </li>
              <li>
                <a href="#"
                  ><i class="bi bi-facebook" style="color: #2554ff"></i
                ></a>
              </li>
              <li>
                <a href="#"><i class="bi bi-github" style="color: grey"></i></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!--   <Footer></Footer> -->
  </div>
</template>

<script>
/* import EnterpriseNavbar from "@/components/Navbars/EnterpriseNavbar.vue";
import Footer from "@/components/Footer.vue"; */

//import axios from "axios";
export default {
  name: "Login",
  components: {
    /*  EnterpriseNavbar,
    Footer, */
  },
  data() {
    return {
      login: {
        email: "",
        password: "",
      },

      hasError: false,
      erreur: "",
      success: false,
    };
  },

  methods: {
    clear() {
      this.hasError = false;
      this.erreur = "";
    },
    loginIt() {
      this.$store
        .dispatch("login", this.login)
        .then((response) => {
          console.log(response.data);
          this.erreur = [];
          this.success = true;
          console.log(response.data.space_name);
          if (response.data.space_name == "candidate") {
            // go to candidate space
            this.$router.push("/candidate/home");
          } else {
            // go to entreprise space
            this.$router.push("/enterprise/home");
          }
        })
        .catch((error) => {
          console.log(error.response);

          if (error.response.data.message == "e-mail not verified") {
            this.erreur = "E-mail non vérifié!";
            (this.hasError = true), (this.success = false);
            this.$toast.error("Votre e-mail n'est pas encore vérifié!");
          } else {
           
            this.erreur = "E-mail/mot de passe incorrect!";
            (this.hasError = true), (this.success = false);
            this.$toast.error("Impossible de se connecter!");
          }
        });
    },
  },
  mounted() {},
};
</script>

<style scoped>
.card {
  border-radius: 3%;
  width: 28%;
  display: flex;
  text-align: left;
  justify-content: center;
  flex-direction: column;
  padding: 1%;
  margin-left: auto;
  margin-right: auto;
  /* margin-top: 5%; */
  box-shadow: #dc143c;
}
.navbar-brand {
  color: #dc143c;
  font-size: 30px;
  font-family: "Comic Sans MS", cursive;
  padding-left: 120px;
}
h3 {
  text-align: center;
  color: #dc143c;
}
label {
  font-weight: 500;
  color: grey;
}
</style>
