<template>
  <div class="about">
    <h2>{{ primeFactors }}</h2>

    <div class="math-stuffs-container center"></div>
  </div>
</template>

<script>
export default {
  name: "PrimeFactors",
  computed: {
    primeFactors: function () {
      return "8";
    },
  },
};
</script>

<style></style>
