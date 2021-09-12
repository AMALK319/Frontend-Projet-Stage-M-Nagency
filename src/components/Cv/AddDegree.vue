<template>
  <div class="formation">
    <!--    formation -->
    <div class="card small-card">
      <div class="row">
        <div class="col-12" >
          <label for="degree_title" class="control-label">Formation:</label>
          <input
            id="degree_title"
            type="text"
            autofocus="autofocus"
            class="form-control"
            v-model="degree.degree_title"
            aria-label=" "
             @change="clear"
            required
          />
           <span
              class="text-danger"
              v-if="erros.degree_title"
              :class="['label label-danger']"
              >{{ erros.degree_title[0] }}</span
            >
        </div>
      </div>
      <br />
      <div class="row">
        <div class="col-6">
          <label for="organism" class="control-label">Etablissement:</label>
          <input
            id="organism"
            type="text"
            autofocus="autofocus"
            class="form-control"
            v-model="degree.organism"
            aria-label=" "
            required
          />
        </div>
        <div class="col-6">
          <label for="organism_city" class="control-label">Ville:</label>
          <input
            id="organism_city"
            type="text"
            autofocus="autofocus"
            class="form-control"
            v-model="degree.organism_city"
            aria-label=" "
          />
        </div>
      </div>
      <br />
      <div class="row">
        <div class="col-6">
          <label for="degree_start_date" class="control-label"
            >Date Debut:</label
          >
          <input
            id="degree_start_date"
            type="date"
            autofocus="autofocus"
            class="form-control"
            v-model="degree.degree_start_date"
            aria-label=" "
            required
          />
        </div>
        <div class="col-6">
          <label for="degree_end_date" class="control-label">Date Fin:</label>
          <input
            id="degree_end_date"
            type="date"
            autofocus="autofocus"
            class="form-control"
            v-model="degree.degree_end_date"
            aria-label=" "
           
            required
          />
        </div>
      </div>
      <br />
      <div class="row">
        <div class="col-12">
          <label for="degree_description" class="control-label"
            >Description:</label
          >
          <textarea
            id="degree_description"
            type="text-area"
            autofocus="autofocus"
            class="form-control"
            v-model="degree.degree_description"
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
    degree : Object,
    erros: Object,
  },
  methods: {
     clear() {
      this.erros = {};
      
    },
  }

};
</script>

<style scoped></style>
