<template>
  <div class="certification">
    <!--    formation -->
    <div class="card small-card">
      <div class="row">
        <div class="col-12" >
          <label for="certification_name" class="control-label">Certification:</label>
          <input
            id="certification_name"
            type="text"
            autofocus="autofocus"
            class="form-control"
            v-model="certification.certification_name"
            aria-label=" "
             @change="clear"
            required
          />
           <span
              class="text-danger"
              v-if="erros.certification_name"
              :class="['label label-danger']"
              >{{ erros.certification_name[0] }}</span
            >
        </div>
      </div>
      <br />
      <div class="row">
        <div class="col-12">
          <label for="issuing_agency" class="control-label">Organisme:</label>
          <input
            id="issuing_agency"
            type="text"
            autofocus="autofocus"
            class="form-control"
            v-model="certification.issuing_agency"
            aria-label=" "
            required
          />
        </div>
        
      </div>
      <br />
      <div class="row">
        <div class="col-6">
          <label for="issue_date" class="control-label"
            >Date De livraison:</label
          >
          <input
            id="issue_date"
            type="date"
            autofocus="autofocus"
            class="form-control"
            v-model="certification.issue_date"
            aria-label=" "
            required
          />
        </div>
        <div class="col-6">
          <label for="expiration_date" class="control-label">Date d'expiration:</label>
          <input
            id="expiration_date"
            type="date"
            autofocus="autofocus"
            class="form-control"
            v-model="certification.expiration_date"
            aria-label=" "
           
            required
          />
        </div>
      </div>
      <br />
      <div class="row">
        <div class="col-6">
          <label for="degree_id" class="control-label"
            >L'ID du certification:</label
          >
          <textarea
            id="degree_id"
            type="text-area"
            autofocus="autofocus"
            class="form-control"
            v-model="certification.degree_id"
            aria-label=" "
          ></textarea>
        </div>
          <div class="col-6">
          <label for="degree_url" class="control-label"
            >L'URL de certification:</label
          >
          <textarea
            id="degree_url"
            type="text-area"
            autofocus="autofocus"
            class="form-control"
            v-model="certification.degree_url"
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
    certification : Object,
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
