<template>
  <div class="content">
     <div id="navb">
      <nav class="navbar navbar-expand-lg  bg-light ">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">G.Employees</a>
          <a class="link pull-right" href="/login" >  Se connecter</a>

        </div>
      </nav>
    </div>
    <br />
    <br /><br />
    <div class="card">
      <div class="card-body">
        <div class="row title">
        

          <h1 class="display-4">Votre e-mail a été vérifié!</h1>
            <div class="icon">
           <i class="bi bi-check-lg"></i>
          </div><br>
          <p class="lead">Connectez-vous pour commencer.</p>
        </div>

        <a
          class="btn btn-lg btn-block"
          href="/login"
          style="width: 250px; background-color: #DC143C; color: white"
        >
          Se connecter
        </a>
      </div>
      <br>
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
      .post( this.$appUrl+"/api/email_verification/" + this.token)
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
  width: 60%;
  
 
 
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 7%;
  margin-left: auto;
  margin-right: auto;
  /* margin-top: 6%; */
}
.navbar-brand {
  color: #DC143C;
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
.link{
  text-decoration: none;
  margin-right: 2%;
  font-size: large;
 font-family: "Comic Sans MS", cursive;
}
</style>
