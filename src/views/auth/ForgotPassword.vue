<template>
  <div class="content">
    <div class="navigation">
      <enterprise-navbar> </enterprise-navbar>
    </div>
    <br />
    <div class="card">
      <div class="card-body">
        <h3>Mot de Passe</h3>
        <br />
        <form>
          <div class="form-group">
            <label for="email" class="control-label">Email address</label>
            <input
              id="firstName"
              autofocus="autofocus"
              aria-label="email"
              type="email"
              class="form-control form-control-lg"
              required
            />
          </div>

          <div class="form-group">
            <label>New Password</label>
            <input
              type="password"
              autofocus="autofocus"
              aria-label=""
              class="form-control form-control-lg"
              required
            />
          </div>

          <div class="form-group">
            <label>Confirm Password</label>
            <input
              type="password"
              autofocus="autofocus"
              aria-label=""
              class="form-control form-control-lg"
              required
            />
          </div>

          <br />
          <button
            type="submit"
            class="btn btn-lg btn-block"
            style="width: 100%; background-color: #f77128; color: white"
          >
            Sauvegarder
          </button>
        </form>
      </div>
    </div>
    <br />
    <br />
    <Footer></Footer>
  </div>
</template>

<script>
import EnterpriseNavbar from "../../components/Navbars/EnterpriseNavbar.vue";
import Footer from "../../components/Footer.vue";
/* import axios from "axios"; */
export default {
  name: "ForgotPassword",
  components: {
    EnterpriseNavbar,
    Footer,
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
  box-shadow: #f4661b;
}
h3 {
  text-align: center;
  color: #f77128;
}
label {
  font-weight: 500;
  color: grey;
}
</style>
