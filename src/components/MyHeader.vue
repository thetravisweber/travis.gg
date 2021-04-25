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
  color: var(--dark-primary);
}

#nav a.router-link-exact-active {
  border: 2px;
}

</style>

