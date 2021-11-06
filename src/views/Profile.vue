<template>
  <div class="profile">
    <h2>Hello, I am Travis</h2>

    <TravisBio />

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
  name: "Profile",
  components: {
    TravisBio,
    TravisSocials,
  },
};
</script>
