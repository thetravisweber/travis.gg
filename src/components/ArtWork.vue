<template>
  <div class="petistawork">
    <WorkTitle>Generative Art</WorkTitle>
    <div class="work-description">
      <p>
        When first learning to code, I was making artwork on my TI-84
        calculator. When I moved to programming a computer, I learned first from
        <a href="https://www.youtube.com/user/shiffman"
          >Daniel Shiffman, on youtube</a
        >. Through his videos, I learned how to create art work in amazing ways
        using software. Unfortunately, Most of the artwork that I made during
        this period was made in Java, which is harder to demonstate in the
        browser. Someday I will make a display of it.
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
