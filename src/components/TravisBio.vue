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
      <router-link to="/work">My Work</router-link>. I am pursuing a degree in
      Mathematics because I believe that this will help me out in my carreer as
      a programmer more than a degree in Computer Science. In the 2 years of
      work I did outside of school, I ran into problems that I could have solved
      better if I had a better understanding high-level of Math, but few that
      required more programming skills. This was especially true in my Machine
      Learning Research. I am hoping that the new tools that my Mathematics
      degree is giving me will help me better search for the solutions to
      Machine Learning problems that everyone is looking for.
    </p>
    <p>
      My favotite football 🏈 team is the Miami Dolphins, and my favorite animal
      is also dolphins 🐬. I have 4 friends,
      <router-link to="/dog">a dog</router-link>, and a girlfriend. My favorite
      hobbies are programming, mountain biking, snowboarding, and playing
      guitar/ukelele.
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
