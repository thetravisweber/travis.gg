<template>
  <img src="@/../public/images/profile.png" height="400" />

  <div class="bio">
    <p>
      I am a 21 year old American 🇺🇸 Software Developer living in Flagstaff,
      Arizona
    </p>
    <p>
      I am currently in my third year of school at Northern Arizona University
      pursuing a degree in Mathematics.
    </p>
    <p>
      I have been programming since I was 16 years old. Feel Free to check out
      some of
      <router-link to="/work">My Work</router-link>.
    </p>
    <p>
      My favorite hobbies are programming, mountain biking, snowboarding, and
      playing guitar/ukelele. I have 4 friends,
      <router-link to="/dog">a dog</router-link>, and a girlfriend.
    </p>
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
