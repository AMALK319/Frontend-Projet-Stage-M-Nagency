<template>
  <div class="content">
    <div id="navigation">
      <enterprise-navbar></enterprise-navbar>
    </div>
    <br /><br /><br />
    <div class="container">
      <div class="card shadow shadow-danger shadow-intensity-md big-card"></div>
    </div>
    <br /><br /><br />
    <Footer></Footer>
  </div>
</template>

<script>
import ApiService from "../../services/api.service";
import EnterpriseNavbar from "@/components/Navbars/EnterpriseNavbar.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Candidates",
  components: {
    EnterpriseNavbar,
    Footer,
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>

<style scoped>
.big-card {
  width: 55%;
  display: flex;
  text-align: left;
  justify-content: center;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  margin-top: 2%;

  height: auto;
}
</style>