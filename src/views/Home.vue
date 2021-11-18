<template>
  <div class="home">
    <Opportunities></Opportunities>
  </div>
</template>

<script>
import Opportunities from "./Opportunities.vue";
// @ is an alias to /src
export default {
  name: "Home",
  components: {
    Opportunities,
  },
};
</script>
