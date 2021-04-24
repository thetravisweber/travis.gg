<template>
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
</template>

<style scoped>

.bio {
  margin: auto;
  width: 400px;
  font-weight: bold;
}

.bio p {
  font-family: "Trebuchet MS", sans-serif;
}

</style>
