<template>
  <div class=" content">
    <div id="navigation">
    <enterprise-navbar></enterprise-navbar>
    </div>
 
  </div>
</template>

<script>
 import EnterpriseNavbar from "@/components/Navbars/EnterpriseNavbar.vue";
/*import Footer from "@/components/Footer.vue"; */

export default {
  name: 'HomeCandidate',
  components:{
      EnterpriseNavbar,
  }
};
</script>

<style scoped>

</style>