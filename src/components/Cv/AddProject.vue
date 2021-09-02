<template>
  <div class="project">
    <div class="card small-card">
      <div class="row">
        <div class="col-12">
          <label for="project_title" class="control-label">Titre:</label>
          <input
            id="project_title"
            type="text"
            autofocus="autofocus"
            class="form-control"
            v-model="project.project_title"
            aria-label=" "
            required
          />
        </div>
      </div>
      <br />
      <div class="row">
        <div class="col-12">
          <label for="master_project" class="control-label">Encadrant:</label>
          <input
            id="master_project"
            type="text"
            autofocus="autofocus"
            class="form-control"
            v-model="project.master_project"
            aria-label=" "
          />
        </div>
      </div>
      <br />
      <div class="row">
        <div class="col-6">
          <label for="project_start_date" class="control-label"
            >Date Debut:</label
          >
          <input
            id="project_start_date"
            type="date"
            autofocus="autofocus"
            class="form-control"
            v-model="project.project_start_date"
            aria-label=" "
            required
          />
        </div>
        <div class="col-6">
          <label for="project_end_date" class="control-label">Date Fin:</label>
          <input
            id="project_end_date"
            type="date"
            autofocus="autofocus"
            class="form-control"
            v-model="project.project_end_date"
            aria-label=" "
            required
          />
        </div>
      </div>
      <br />
      <div class="row">
        <div class="col-12">
          <label for="project_description" class="control-label"
            >Description:</label
          >
          <textarea
            id="project_description"
            type="text-area"
            autofocus="autofocus"
            class="form-control"
            v-model="project.project_description"
            aria-label=" "
          ></textarea>
        </div>
      </div>
      <br />
    </div>
    <br />
  
  </div>
</template>
<script>
export default {
  props: {
    project: Object,
    hasError : Boolean,
    erreur : String,
  },
  methods: {

  },
};
</script>

<style scoped></style>
