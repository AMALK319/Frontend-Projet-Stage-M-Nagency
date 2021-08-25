<template>
  <div class="content">
     <div id="navb">
      <nav class="navbar navbar-expand-lg  bg-light ">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">G.Employees</a>
        </div>
      </nav>
    </div>
    <br />
    <br /><br />
    <div class="card">
      <div class="card-body">
        <div class="row title">
          <div class="icon">
            <i class="bi bi-patch-check"></i>
          </div>

          <h1 class="display-4">Votre e-mail a été vérifié!</h1>
          <p class="lead">Connectez-vous pour commencer.</p>
        </div>

        <a
          class="btn btn-lg btn-block"
          href="/login"
          style="width: 250px; background-color: #f37041; color: white"
        >
          Se connecter
        </a>
      </div>
    </div>
   
  </div>
</template>

<script>


import axios from "axios";
export default {
  name: "VerifyEmail",
  components: {

  },
  data() {
    return {
      token: this.$route.params.token,
    };
  },
  mounted() {
    axios
      .post("http://127.0.0.1:8000/api/email_verification/" + this.token)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.log(error));
  },
};
</script>

<style scoped>
.card {
  height: auto;
  width: 600px;
  border-color: #f8d2c3;
  box-shadow: #f37041;
  border-radius: 3%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 7%;
  margin-left: auto;
  margin-right: auto;
  /* margin-top: 6%; */
}
.navbar-brand {
  color: #fc581c;
  font-size: 30px;
  font-family: "Comic Sans MS", cursive;
  padding-left: 120px;
}
.title {
  margin-top: 1%;
  text-align: center;
}
.icon {
  text-align: center;
  color: green;
  font-size: 60px;
}
.btn {
  display: block;
  margin: auto;
}
</style>
