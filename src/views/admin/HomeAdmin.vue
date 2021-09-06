<template>
  <div class="content">
    <br /><br /><br /><br /><br />
    <div class="card">
      <div class="card-body">
        <h3>Connexion</h3>
        <br />

        <div>
          <div
            class="form-group"
            :class="['form-group', erros.email ? 'has-error' : '']"
          >
            <label for="email" class="control-label">Email address</label>
            <input
              id="firstName"
              autofocus="autofocus"
              aria-label="email"
              type="email"
              v-model="login.email"
              @change="clear"
              class="form-control form-control-sm"
              required
            />
            <span
              class="text-danger"
              v-if="erros.email"
              :class="['label label-danger']"
              >{{ erros.email[0] }}</span
            >
          </div>

          <div
            class="form-group"
            :class="['form-group', erros.password ? 'has-error' : '']"
          >
            <label>Password</label>
            <input
              type="password"
              autofocus="autofocus"
              aria-label=""
              v-model="login.password"
              @change="clear"
              class="form-control form-control-sm"
              required
            />
            <span
              class="text-danger"
              v-if="erros.password"
              :class="['label label-danger']"
              >{{ erros.password[0] }}</span
            >
          </div>
          <br />
          <button
            type="button"
            @click="logged"
            class="btn btn-sm btn-block"
            style="width: 100%; background-color: #aa213d; color: white"
          >
            Se connecter
          </button>

          <p class="forgot-password text-right mt-2 mb-4">
            <a href="/forgot-password" style="color: #dc143c"
              >Mot de passe oublié?</a
            >
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeAdmin",
  components: {},
  props: {},
  data() {
    return {
      login: {
        email: "",
        password: "",
      },
      erros: [],
    };
  },
  methods: {
    logged() {
      this.$store
        .dispatch("adminLogin", this.login)
        .then((response) => {
          this.erros = [];
          console.log(response.data);
          this.$router.push("/admin/dashboard");
        })
        .catch((error) => {
          console.log(error.response);
          this.erros = error.response.data.errors;
          this.$toast.error("Impossible de se connecter! E-mail/mot de passe incorrect!", {
            position: "top-right",
          });
        });
    },
    clear() {
      this.erros = [];
      this.success = true;
    },
  },
};
</script>

<style scoped>
.content {
  background-color: #8b172e;
  height: 577px;
}

.card {
  border-radius: 3%;
  width: 26%;
  padding: 0.5%;
  display: block;
  margin: auto;
  /* height: 330px;
  max-height: 400px; */
}

h3 {
  text-align: center;
  color: #aa213d;
}
label {
  font-weight: 500;
  color: grey;
}
</style>