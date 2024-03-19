<template>
  <div id="app">
    <nav>
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
    </nav>
    <sidebarBlock />

    <router-view/>
  </div>
</template>

<script>
  import SidebarBlock from '@/components/layouts/SidebarBlock.vue';

  export default {
    components: {
      SidebarBlock
    }
  }
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.mb-4 {
  background-color: #757575 !important;
  border-color: #757575 !important;
}

.pa-4 {
  padding: 16px !important;
}

.username {
  padding-top: 10px;
}

</style>
