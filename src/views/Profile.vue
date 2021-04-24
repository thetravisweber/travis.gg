<template>
  <div class="home">
    <TravisBio />
  </div>
</template>

<script>
// @ is an alias to /src
import TravisBio from "@/components/TravisBio.vue";

export default {
  name: "Home",
  components: {
    TravisBio,
  },
};
</script>
