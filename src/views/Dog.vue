<template>
  <div class="home">
    <h2> Here is my dog </h2>
    <div class="center">
      <travis-socials />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import TravisBio from "@/components/TravisBio.vue";
import TravisSocials from "@/components/TravisSocials.vue";

export default {
  name: "Home",
  components: {
    TravisBio,
    TravisSocials,
  },
};
</script>

<style scoped>
.center {
  margin: auto;
  width: 50%;
  padding: 10px;
}
</style>