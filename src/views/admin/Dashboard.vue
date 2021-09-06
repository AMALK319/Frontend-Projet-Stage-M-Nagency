<template>
  <div class=" container-fluid">
    <div class="row flex-nowrap">
     <Sidebar></Sidebar> 
      <div class="col py-3">
        <h3>Dashboard</h3>
        <p class="lead">
        Welcome
        </p>
        
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from '../../components/Sidebar.vue'
export default {
  name: "Dashboard",
  components: {
    Sidebar,
  },
  props: {},
  data() {},
};
</script>

<style scoped>

</style>