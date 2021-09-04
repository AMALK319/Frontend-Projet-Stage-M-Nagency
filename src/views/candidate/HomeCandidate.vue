<template>
  <div class="content">
    <div id="navigation">
      <candidate-navbar></candidate-navbar>
    </div>

    <div class="container">
      <!-- <h2 class="text-center">    Décrochez votre job de rêves grâce à notre application!</h2> -->

      <img class="image" src="../../assets/home_image.jpg" alt="" />
      <h2 class="text-center">Bienvenue dans l’ère du candidat roi !</h2>
      <p class="text">
        Avec G.Employees, vous n'avez plus besoin de chercher, candidater et
        attendre. Créez rapidement et facilement votre Cv à travers notre
        application. Et nous vous proposerons immédiatement à une panoplie de
        grandes entreprises.
      </p>
      <br />
      <h2 class="text-center">Ils utilisent déjà G.employees</h2>
      <br />
      <div class="row">
        <div class="col">
          <div class="row">
            <br>
            <p class="comment">
              "G.Employees nous permet d’acquérir tous les jours de
              nouveaux talents du digital pour développer notre croissance."
            </p>
          </div>

          <div class="row">
           <pre><img src="../../assets/avatar.jpg" alt="Avatar" class="avatar" /><span class="name">Lina Lacroix, founder de</span> <span class="name" style="font-style:italic;" >T.Mobile </span></pre> 
          </div>
        </div>
        <div class="col">
          <img class="logo"  src="../../assets/t-mobile-logo.png" alt="">
        </div>
      </div>
    </div>
    <br /><br />
    <Footer></Footer>
  </div>
</template>

<script>
import CandidateNavbar from "../../components/Navbars/CandidateNavbar.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "HomeCandidate",
  components: {
    CandidateNavbar,
    Footer,
  },
};
</script>

<style scoped>
.image {
  display: block;
  margin: auto;
  width: 100%;
  height: 400px;
}

.container {
  margin-top: 6%;
}
h2 {
  color: rgb(19, 18, 18);
  margin-top: 3%;
  font-family: cursive;
}

.text {
  text-align: center;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: large;
  font-weight: normal;
  margin-top: 3%;
  margin-left: 10%;
  margin-right: 10%;
  color: rgb(83, 74, 74);
}
.comment {
  font-weight: lighter;
  max-width: 70%;
  font-size: large;
  margin-left: 20%;
  font-style: italic;
}
.avatar {
 
  width: 50px;
  height: 30px;
  border-radius: 50%;
  margin-left: 20%;
}
.name{
  font-size: medium;
  font-family: cursive;
  color: rgb(59, 58, 58);
}

.logo{
  margin-left: 30%;
  width: 50%;
  margin-top: 0;
  height: 60%;
}



</style>