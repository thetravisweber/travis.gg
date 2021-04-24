<template>
  <div class="about">
    <h2>My Work:</h2>

    <div class="work-container center">
    <PetistaWork />


    </div>
  </div>
</template>


<script>
// @ is an alias to /src
import PetistaWork from "@/components/PetistaWork.vue";

export default {
  name: "Work",
  components: {
    PetistaWork,
  },
};
</script>

<style>

.work-container {
  width: 60%;
  min-height: 400px;
  border-width: 0 8px 0 8px; /* top right bottom left */
  border-style: solid double;
  border-color: #ffb703;
}

.work-description {
  text-align: left;
  text-indent: 25px;
  color: #000000;
}


</style>