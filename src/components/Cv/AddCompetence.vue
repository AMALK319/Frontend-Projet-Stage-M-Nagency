<template>
  <div class="competence">
    <div class="card small-card">
      <div class="row">
        <div class="col-12">
          <label for="competence" class="control-label">Compétence:</label>
          <input
            id="competence"
            type="text"
            autofocus="autofocus"
            class="form-control bg-light"
            v-model="competence.competence"
            aria-label=" "
            required
          />
        </div>
      </div>
      <br />
      <div class="row">
        <div class="col-12">
          <label for="competence_description" class="control-label"
            >Description:</label
          >
          <textarea
            id="competence_description"
            type="text-area"
            autofocus="autofocus"
            class="form-control bg-light"
            v-model="competence.competence_description"
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
    competence : Object,
  },
  methods: {
    
  }

};
</script>

<style scoped></style>