<template>
  <div class="content">
    <div id="navigation">
      <candidate-navbar></candidate-navbar>
    </div>
    
    <div class="card">
      <div class="col-md-3">
        <div class="list-group" id="contacts"></div>
        <a href="" id="1" class="list-group-item">Name</a>
        <a href=""  id="2 " class="list-group-item">Name</a>
        <a href=""  id="3" class="list-group-item">Name</a>
        <a href=""  id="4 " class="list-group-item">Name</a>
        <a href=""  id="5" class="list-group-item">Name</a>
      </div>
    </div>
    <div data-spy="scroll" data-target="#contacts" data-offset="0">
      <h4 id="1"></h4>
      <p>...</p>
      <h4 id="2"></h4>
      <p>...</p>
      <h4 id="3"></h4>
      <p>...</p>
      <h4 id="4"></h4>
      <p>...</p>
      <h4 id="5"></h4>
      <p>...</p>
    </div>
  </div>
</template>

<script>
import CandidateNavbar from "../../../components/Navbars/CandidateNavbar.vue";
/*import Footer from "@/components/Footer.vue"; */

export default {
  name: "CandidateConversation",
  components: {
    CandidateNavbar,
  },
};
</script>

<style scoped>
.card {
  width: 80%;
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
.list-group{
  
}
</style>