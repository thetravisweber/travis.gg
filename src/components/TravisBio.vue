<template>
  <h2>Hello, I am Travis</h2>

  <img src="@/../public/images/profile.png" height="400" />

  <div class="bio">
    <p>
      I am 21 year old American 🇺🇸 Software Developer currently living in
      Scottsdale, Arizona. 
    </p>
    <p>
      I am currently attending Rio Salado Community College,
      and hope to graduate from a state school with a degree in Mathematics.
    </p>
    <p>
      I have been programming since I was 16 years old. For the last 2 years, I have been working
      almost exclusively in web development. Feel Free to check out some of 
      <router-link to="/work">My Work</router-link>
    </p>
    <p> I have 4 friends, 1 Dog, and 1 girlfriend. </p>
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
</template>

<style scoped>
h2 {
  color: #000000;
}

img {
  color: #ffb703;

  box-shadow: 10px 10px currentColor;
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
