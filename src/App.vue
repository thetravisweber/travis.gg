<template>
  <MyHeader />
  <router-view />
</template>

<script>
// @ is an alias to /src
import MyHeader from "@/components/MyHeader.vue";

export default {
  components: {
    MyHeader,
  },
};
</script>

<style>
/* 

COLOR SCHEME

https://coolors.co/8ecae6-219ebc-023047-ffb703-fb8500

*/

:root {
  --light-primary: #8ecae6;
  --primary: #219ebc;
  --dark-primary: #023047;
  --light-secondary: #ffb703;
  --secondary: #fb8500;
  --black: #000;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--dark-primary);
}

body {
  background-color: var(--primary);
  margin: 0;
  padding: 0;
}

h2 {
  color: var(--black);
}

h4 {
  color: var(--black);
  text-decoration: underline;
}

img {
  color: var(--light-secondary);

  box-shadow: 10px 10px currentColor;
}

a {
  color: var(--dark-primary);
}

a:hover {
  transition: 0.4s;
  background-color: var(--light-primary);
  padding: 2px;
  border: 1px solid var(--black);
  border-radius: 2px 10px 2px 10px;
}

.center {
  margin: auto;
  width: 50%;
  padding: 10px;
}
</style>
