<template>
  <div id="nav">
    <router-link to="/">Profile</router-link> |
    <router-link to="/work">My Work</router-link>
  </div>
  <router-view />
</template>

<style>

/* 
COLOR SCHEME

https://coolors.co/8ecae6-219ebc-023047-ffb703-fb8500

Little Blue:        #8ecae6
Medium Blue:        #219ebc
Dark Blue:          #023047
Yellow Orange:      #ffb703
Orange Orange:      #fb8500

*/


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

body {
  background-color:#4592af;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #facf5a;;
}
</style>
