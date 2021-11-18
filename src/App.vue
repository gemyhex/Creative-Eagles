<template>
  <div class="wrapper">
    <div class="sidebar">
      <sidebar></sidebar>
    </div>
    <div class="page">
      <router-view />
    </div>
  </div>
</template>
<script>
import sidebar from "./components/Sidebar.vue";
export default {
  components: {
    sidebar,
  },
};
</script>
<style lang="scss"></style>
