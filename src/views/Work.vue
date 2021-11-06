<template>
  <div class="about">
    <h2>Work History</h2>

    <div class="work-container center">
      <PetistaWork />

      <ArtWork />

      <TreeTopWork />

      <OtherWork />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ArtWork from "@/components/ArtWork.vue";
import OtherWork from "@/components/OtherWork.vue";
import PetistaWork from "@/components/PetistaWork.vue";
import TreeTopWork from "@/components/TreeTopWork.vue";

export default {
  name: "Work",
  components: {
    ArtWork,
    OtherWork,
    PetistaWork,
    TreeTopWork,
  },
};
</script>

<style>
.work-container {
  width: 60%;
  min-height: 100%;
  border-width: 0 8px 0 8px; /* top right bottom left */
  border-style: solid double;
  border-color: var(--light-secondary);
}

.work-description {
  text-align: left;
  text-indent: 25px;
  color: var(--black);
}
</style>
