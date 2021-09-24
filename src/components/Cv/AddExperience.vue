<template>
  <div class="experience">
    <!--    experience -->
    <div class="card small-card">
      <div class="row">
        <div class="col-12">
          <label for="experience_title" class="control-label"
            >Expérience:</label
          >
          <input
            id="experience_title"
            type="text"
            autofocus="autofocus"
            class="form-control"
            v-model="experience.experience_title"
            aria-label=" "
            @change="clear"
            required
          />
          <span
            class="text-danger"
            v-if="erros.experience_title"
            :class="['label label-danger']"
            >{{ erros.experience_title[0] }}</span
          >
        </div>
      </div>
      <br />
      <div class="row">
        <div class="col-6">
          <label for="enterprise_name" class="control-label">Nom d'entreprise:</label>
          <input
            id="enterprise_name"
            type="text"
            autofocus="autofocus"
            class="form-control"
            v-model="experience.enterprise_name"
            aria-label=" "
            required
          />
        </div>
        <div class="col-6">
          <label for="enterprise_city" class="control-label">Ville:</label>
          <input
            id="enterprise_city"
            type="text"
            autofocus="autofocus"
            class="form-control"
            v-model="experience.enterprise_city"
            aria-label=" "
          />
        </div>
      </div>
      <br />
      <div class="row">
        <div class="col-12">
          <label for="enterprise_address" class="control-label"
            >Addresse:</label
          >
          <textarea
            id="enterprise_address"
            type="text-area"
            autofocus="autofocus"
            class="form-control"
            v-model="experience.enterprise_address"
            aria-label=" "
          ></textarea>
        </div>
      </div>
      <br />
      <div class="row">
        <div class="col-6">
          <label for="experience_start_date" class="control-label"
            >Date Debut:</label
          >
          <input
            id="experience_start_date"
            type="date"
            autofocus="autofocus"
            class="form-control"
            v-model="experience.experience_start_date"
            aria-label=" "
            required
          />
        </div>
        <div class="col-6">
          <label for="experience_end_date" class="control-label">Date Fin:</label>
          <input
            id="experience_end_date"
            type="date"
            autofocus="autofocus"
            class="form-control"
            v-model="experience.experience_end_date"
            aria-label=" "
            required
          />
        </div>
      </div>
      <br />
      <div class="row">
        <div class="col-12">
          <label for="experience_description" class="control-label"
            >Description:</label
          >
          <textarea
            id="experience_description"
            type="text-area"
            autofocus="autofocus"
            class="form-control"
            v-model="experience.experience_description"
            aria-label=" "
          ></textarea>
        </div>
      </div>
      <br />
    </div>
    <br />
    <!--  <button class="btn btn-sm btn-complete btn-danger pull-right">
      <i class="bi bi-check-lg" style="color: white; font-size: 80%"></i>
      Vider
    </button> -->
  </div>
</template>

<script>
export default {
  props: {
    experience: Object,
    erros: Object,
  },
  methods: {
    clear() {
      this.erros = {};
    },
  },
};
</script>

<style scoped></style>
