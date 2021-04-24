<template>
  <div class="socials">
    <social-link icon="twitter" link="https://twitter.com/travis_weber_" />
    <social-link
      icon="instagram"
      link="https://www.instagram.com/travis__weber/"
    />
    <social-link
      icon="youtube"
      link="https://www.youtube.com/channel/UCJECUUnURjLq6QuetU5Mn1A"
    />
  </div>
</template>

<script>
import SocialLink from "./SocialLink.vue";

export default {
  components: {
    SocialLink,
  },
};
</script>

<style scoped>
.socials {
  display: flex;
  margin: auto;
  width: 100%;
}
</style>
