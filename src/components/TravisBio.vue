<template>
  <h2>Hello, I am Travis</h2>

  <img src="public/images/profile.png" height="400" />

  <div class="bio">
    <p>
      I am 21 year old American 🇺🇸 Software Developer currently living in
      Scottsdale, Arizona. I have 4 friends, 1 Dog, and 1 girlfriend.
    </p>
  </div>

  <div class="center">
    <!-- <star-rating
      class="star-center .center"
      rating="4.83"
      increment="0.01"
      readonly="true"
    ></star-rating>
    <p class="disclaimer">(results based on 2021 study)</p> -->
  </div>

  <div class="center">
    <travis-socials />
  </div>
</template>

<script>
import TravisSocials from "./TravisSocials.vue";

export default {
  components: {
    TravisSocials,
  },
};
</script>

<style scoped>
h2 {
  color: #000000;
}

img {
  color: #facf5a;

  box-shadow: 10px 10px currentColor;
}

.center {
  margin: auto;
  width: 50%;
  padding: 10px;
}

.star-center {
  width: 70%;
  margin: auto;
  padding: 10px 10px 0px 10px;
}

.bio {
  margin: auto;
  width: 400px;
  font-weight: bold;
}

.bio p {
  font-family: "Trebuchet MS", sans-serif;
}

.disclaimer {
  padding-top: 0;
}
</style>
