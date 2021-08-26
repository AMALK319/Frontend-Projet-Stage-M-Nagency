<template>
  <div class="home">
    <div id="navb">
      <nav class="navbar navbar-expand-lg  bg-light ">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">G.Employees</a>
        </div>
      </nav>
    </div>
    <div class="container">
      <div class="row title">
        <h1 class="display-4">Bienvenue à G.Employees!</h1>
        <p class="lead">
          Veuillez nous déclarer votre role tout d'abord.
        </p>
      </div>
      <!-- <br /> -->
      <div class="row">
        <div class="col-sm-3"></div>
        <div class="col-sm-3">
          <div class="card">
            <div class="card-body">
              <div class="icon">
                <i class="bi bi-building"></i>
              </div>
              <h5 class="card-title" style="text-align:center;">
                Entreprise
              </h5>
              <br />
              <p class="card-text ">
                Etes vous à la recherche des candidats qualifiés? Rejoignez nous
                en cliquant
                <router-link
                  class="link stretched-link"
                  :to="{ name: 'EnterpriseRegister' }"
                  >ici</router-link
                >
              </p>
            </div>
          </div>
        </div>
        <div class="col-sm-3">
          <div class="card">
            <div class="card-body">
              <div class="icon">
                <i class="fas fa-user-tie"></i>
              </div>
              <h5 class="card-title" style="text-align:center;">Candidat</h5>
              <br />
              <p class="card-text ">
                Etes vous à la recherche d'un job?Rejoignez nous en cliquant
                <router-link
                  class="link stretched-link"
                  :to="{ name: 'CandidateRegister' }"
                  >ici</router-link
                >
              </p>
            </div>
          </div>
        </div>
        <div class="col-sm-3"></div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "Home",
};
</script>

<style scoped>
.navb {
  /* background-color: white; */
}
.navbar-brand {
  color: #DC143C;
  font-size: 30px;
  font-family: "Comic Sans MS", cursive;
  padding-left: 120px;
}
.title {
  /*   margin-top: 1%; */
  text-align: center;
}
.card {
  height: auto;
  max-height: 700px;
  border-color: #f7cdd5;
  box-shadow: #DC143C;
}
.icon {
  text-align: center;
  font-size: 80px;
}
.card-title {
  color: rgb(83, 81, 81);
}
.card-text {
  text-align: center;
  color: rgb(100, 98, 98);
  font-size: small;
}
.link {
  color: #DC143C;
}
</style>
