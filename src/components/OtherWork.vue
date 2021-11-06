<template>
  <div class="petistawork">
    <WorkTitle>Other Work</WorkTitle>
    <div class="work-description">
      <p>
        Besides the work listed above, I have always kept myself very busy with
        other work! I teach myself new skills on a regular basis, and try to not
        let old skills die. When doing math homework, I often program a function
        that will solve the problem using C, because otherwise then I never use
        my C skills, but I like to keep them up-to-date.
      </p>
      <p>
        When I need to draft a project quickly, my go-to language is Javascript.
        I have not done many projects in python, but for the last 6 months or
        so, then I have been using python a lot whenever I need something done
        quickly. The majority of my work is done in PHP and MySQL. I use Java
        when I develop games.
      </p>
      <p>
        My favorite side project(s) is messing with Artificial Intelligence! I
        don't use tensor flow or MLPack, instead then my hobby is coding the
        algorithms from scratch because that way then I truly understand what is
        going on. I believe that the major advancements in the next 20 years in
        the field of Artificial Intelligence will be made at the low lying
        algorithm level, not in data collection or processing power. I do not
        believe that we have closely enough replicated the process that our
        brain uses, and that is what I spend my spare time exploring!
      </p>
      <p>
        The reason that I do not have this work split up here, is most of it is
        small stuff that is not worth putting on github, and is hard to
        document.
      </p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import WorkTitle from "@/components/WorkTitle.vue";

export default {
  name: "Profile",
  components: {
    WorkTitle,
  },
};
</script>

<style scoped>
img {
  width: 30%;

  margin: 5%;
}
</style>
