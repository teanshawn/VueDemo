<template>
  <div>
    <h1>Home</h1>
    <ul class="nav nav-tabs">
      <router-link to="/home/news">news</router-link>
      <router-link to="/home/message">message</router-link>
    </ul>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>

</template>

<script>
  export default {}
</script>

<style scoped>

</style>
