<template>
  <div class="petistawork">
    <WorkTitle>Petista</WorkTitle>
    <div class="work-description">
      <p>
        For the last two years, I have been working for a company called
        <a href="https://petista.com/"> Petista</a>. Petista is an application
        that makes lives easier for mobile pet groomers. It allows online
        booking for customers via <a href="https://pawgo.co/"> pawgo.co</a>.
      </p>
      <p>
        When I was first hired, I was the first in house developer. I have now
        been with the company long enough to watch the development team grow to
        7 strong. At first, I was working as a full stack developer, but have
        been working as the lead back-end developer for the past year.
      </p>
      <p>
        I have learned a lot from this experience. Namely, that being a
        programming is a lot more than just writing code. Through working with
        others, I have improved my communication skills, technical confidence,
        and social skills.
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
