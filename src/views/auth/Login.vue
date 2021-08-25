<template>
  <div class=" content">
    <div id="navb">
      <nav class="navbar navbar-expand-lg  bg-light ">
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
            <label for="email" class=" control-label">Email address</label>
            <input
              id="firstName"
              autofocus="autofocus"
              aria-label="email"
              type="email"
              v-model="login.email"
              class="form-control form-control-lg"
              required
            />
          </div>

          <div class="form-group">
            <label>Password</label>
            <input
              type="password"
              autofocus="autofocus"
              aria-label=""
              v-model="login.password"
              class="form-control form-control-lg"
              required
            />
          </div>
          <br />
          <button
            type="button"
            class="btn  btn-lg btn-block"
            @click="loginIt"
            style="width: 100% ; background-color: #fc581c ; color: white;"
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
                  ><i class="bi bi-facebook" style="color :#2554ff"></i
                ></a>
              </li>
              <li>
                <a href="#"
                  ><i class="bi bi-github" style="color : grey"></i
                ></a>
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

import axios from "axios";
export default {
  name: "Login",
  components: {
   /*  EnterpriseNavbar,
    Footer, */
  },
  data() {
    return {
      login: {
        email: "amalkalim@gmail.com",
        password: ".",
      },
      submitted: false,
    };
  },

  methods: {
    loginIt() {
      axios
        .post(this.$appUrl+"/api/user-login1", this.login)
        .then((response) => {
           console.log("dddd",response);
          if(response.data.space_name == "candidate") {
              // go to candidate space [store] (response.data.user
          }else{
              // go to entreprise space
          }
        })
        .catch((error) => {
           console.log(error.response.data);
     
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
  box-shadow: #f4661b;
}
.navbar-brand {
  color: #fc581c;
  font-size: 30px;
  font-family: "Comic Sans MS", cursive;
  padding-left: 120px;
}
h3 {
  text-align: center;
  color: #f4661b;
}
label {
  font-weight: 500;
  color: grey;
}
</style>
