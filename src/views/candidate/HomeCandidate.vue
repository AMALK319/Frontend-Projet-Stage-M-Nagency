<template>
  <div class=" content">
    <div id="navigation">
    <candidate-navbar></candidate-navbar>
    </div>

   
 </div>
 
</template>

<script>
 import CandidateNavbar from "../../components/Navbars/CandidateNavbar.vue"; 
/*import Footer from "@/components/Footer.vue"; */

export default {
  name: 'HomeCandidate',
  components:{
     CandidateNavbar,
  }
};
</script>

<style scoped>

</style>