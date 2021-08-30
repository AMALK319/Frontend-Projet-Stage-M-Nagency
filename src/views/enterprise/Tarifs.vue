<template>
  <div class="content">
    <div id="navigation">
      <enterprise-navbar></enterprise-navbar>
    </div>
    <br /><br />
    <div class="container" style="height: 300px">
      <br />
      <h1 class="text-center">Nos Offres et Tarifs</h1>
      <h2 class="text-center">
        Trouvez les meilleurs profils pour compléter votre équipe
      </h2>
      <br /><br />
      <div class="row">
        <div class="col-4">
          <div class="card" style="width: 18rem; height: 300px">
            <div class="card-body">
              <h5 class="title">Débutant</h5>
              <br />
              <p class="text">1000Dhs</p>
              <p class="text-center">
                <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i>  <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i>  <i class="bi bi-star-half"></i>
              </p>
              <p class="text" style="font-size: small; color: grey">
                Hors Taxes
              </p>

              <a href="#" class="btn btn-md btn-start">Commencer</a>
            </div>
          </div>
        </div>
        <div class="col-4">
          <div
            class="card"
            style="width: 18rem; height: 300px; background-color: #a70727"
          >
            <div class="card-body">
              <h5 class="title" style="color: white">Prémium</h5>
              <br />
              <p class="text" style="color: white">2000Dhs</p>
              <p class="text-center">
                <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i>  <i class="bi bi-star-fill"></i>
              </p>

              <p class="text" style="font-size: small; color: grey">
                Hors Taxes
              </p>

              <a href="#" class="btn btn-md btn-start-pre">Commencer</a>
            </div>
          </div>
        </div>
        <div class="col-4">
          <div class="card" style="width: 18rem; height: 300px">
            <div class="card-body">
              <h5 class="title">Sur Mesure</h5>
              <br />
              <p class="text">Tarifs Personnalisés</p>
              <p class="text-center">
                <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i>  <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i>  <i class="bi bi-star"></i>
              </p>
              <p class="text" style="font-size: small; color: grey">
                Selon votre besoin
              </p>

              <a href="#" class="btn btn-md btn-start">Contactez-nous</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import EnterpriseNavbar from "@/components/Navbars/EnterpriseNavbar.vue";
/* import Footer from "@/components/Footer.vue"; */

export default {
  name: "Tarifs",
  components: {
    EnterpriseNavbar,
    /* Footer, */
  },
};
</script>

<style scoped>
.content {
  background-color: #dc143c;
}
h1 {
  font-family: cursive;
  font-weight: bold;
  color: white;
}
h2 {
  color: white;
  font-family: cursive;
}
.btn-start {
  width: 80%;

  background-color: #dc143c;
  color: white;
  display: block;
  margin: auto;
}
.btn-start-pre {
  width: 80%;

  background-color: white;
  color: #dc143c;
  display: block;
  margin: auto;
}
.title,
.text {
  text-align: center;
  font-family: cursive;
  color: rgb(78, 78, 78);
}
.title {
  font-weight: bold;
  font-size: 25px;
}
.card-body {
  padding-top: 20%;
  padding-bottom: 5%;
}
.row {
  margin-right: 3%;
  margin-left: 3%;
}
.bi {
  color: yellow;
}
</style>