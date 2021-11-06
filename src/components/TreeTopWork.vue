<template>
  <div class="petistawork">
    <WorkTitle>Tree Top</WorkTitle>
    <div class="work-description">
      <p>
        My senior year of highschool, two of my classmates approached me about
        making an IOS game with them, because they knew how to code. Looking for
        new ways to test my skills, I accepted. They made all of the artwork
        necessary, and I wrote the application. It actually turned out really
        awesome!
      </p>
      <div id="treetop-images" class="treetop-images">
        <img src="@/../public/images/treetopmenu.png" />
        <img src="@/../public/images/treetopingame.png" />
      </div>
      <p>
        The premise is that you are a flying squirrely jumping through trees.
        You can tap to jump and hold to glide. It is very similar to the old
        game flappy bird, except that you can land on the pillars, and you only
        get two jumps rather than infinite. Unfotunately, this game is no longer
        on the app store.
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
