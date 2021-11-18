<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <p>Investment Opportunities ({{ opp }})</p>
      </div>
      <div class="col"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    opp: {
      type: Number,
      default: () => {},
    },
  },
};
</script>

<style lang="scss">
.col {
  p {
    font-weight: 600;
    font-size: 18px;
    color: #063847;
  }
}
</style>
