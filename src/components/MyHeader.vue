<template>
  <div id="nav">
    <router-link to="/">Profile</router-link> |
    <router-link to="/work">My Work</router-link>
  </div>
</template>


<style>

#nav {
  width: 100%;
  background-color: var(--secondary);
  padding: 30px;
}
#nav a {
  font-weight: bold;
  color: #8ecae6;
}

#nav a.router-link-exact-active {
  color: var(--dark-primary);;
}

</style>

