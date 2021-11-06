<template>
  <div id="nav">
    <router-link to="/">Profile</router-link>
    | <router-link to="/math-stuffs">Math Stuffs</router-link> |
    <router-link to="/work">Work History</router-link> |
    <router-link to="/skillz">Skills</router-link> |
    <router-link to="/dog">Dog</router-link>
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
  padding: 3px;
  color: var(--dark-primary);
}

#nav a.router-link-exact-active:hover {
  transition: 0.4s;
  background-color: var(--light-primary);
  border: 2px solid var(--black);
  border-radius: 10px 2px 10px 2px;
}

#nav a.router-link-exact-active {
  transition: 0.2s;
  background-color: var(--light-secondary);
  border: 2px solid var(--black);
  border-radius: 2px 10px 2px 10px;
}
</style>
