<template>
  <div class=" container-fluid">
    <div class="row flex-nowrap">
     <Sidebar></Sidebar> 
      <div class="col py-3">
       
        
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from '../../components/Sidebar.vue'
export default {
  name: "Candidate",
  components: {
    Sidebar,
  },
  props: {},
  data() {},
};
</script>

<style scoped>

</style>