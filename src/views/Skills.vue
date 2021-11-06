<template>
  <div class="about">
    <h2>Skills</h2>

    <div class="skills-container center">
      <WorkTitle>Programming Skills</WorkTitle>

      <p>First and Foremost, I am a developer.</p>
      <p>I am skilled in all of the following:</p>
      <ul class="list-group">
        <li class="list-group-item active">Database Architecture</li>
        <li class="list-group-item">Object Oriented Programming</li>
        <li class="list-group-item">PHP</li>
        <li class="list-group-item">Node</li>
        <li class="list-group-item">MySQL</li>
        <li class="list-group-item">Java</li>
        <li class="list-group-item">Dart/Flutter</li>
      </ul>
      <p>I have weaknesses in the following, mostly from lack of experience:</p>

      <ul>
        <li>Front-end programming</li>
        <li>3D game development</li>
        <li>Dev OPS/server management</li>
      </ul>

      <WorkTitle>Communication Skills</WorkTitle>

      <p>
        I have spent a lot of time working with developers in other nations. As
        the only American developer in the start-up that I have been working
        for, much of my duty has been communicating and coordinating with
        developers around the globe.
      </p>
    </div>
  </div>
</template>

<script>
import WorkTitle from "@/components/WorkTitle.vue";

export default {
  name: "Skills",
  components: {
    WorkTitle,
  },
};
</script>

<style>
.skills-container {
  width: 60%;
  min-height: 100%;
  border-width: 0 8px 0 8px; /* top right bottom left */
  border-style: solid double;
  border-color: var(--light-secondary);
}

p,
li {
  text-align: left;
  text-indent: 25px;
  color: var(--black);
  list-style-type: square;
}
</style>
