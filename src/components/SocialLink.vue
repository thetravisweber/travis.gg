<template>
  <div class="soc">
    <a :href="link">
      <img :src="iconLink" height="50" />
    </a>
  </div>
</template>

<script>
export default {
  props: {
    link: String,
    iconLink: String
  },
};
</script>

<style scoped>
/* Style all font awesome icons */
.soc {
  padding: 20px;
  font-size: 30px;
  width: 33%;
  align-content: center;
}

/* Add a hover effect if you want */
.soc:hover {
  opacity: 0.7;
}
</style>
