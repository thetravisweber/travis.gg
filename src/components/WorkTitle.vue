<template>
  <div class="worktitle">
    <h4>
      <slot />
    </h4>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
  },
};
</script>

<style scoped>
.worktitle {
  text-align: left;
}
</style>
