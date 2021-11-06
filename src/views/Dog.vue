<template>
  <div class="dog">
    <h2>This is my dog, Maverick</h2>

    <MaverickBio />
  </div>
</template>

<script>
// @ is an alias to /src
import MaverickBio from "@/components/MaverickBio.vue";

export default {
  name: "Dog",
  components: {
    MaverickBio,
  },
};
</script>
