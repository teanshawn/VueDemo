<template>
  <div>
    <h2>Home</h2>
    <div>
      <ul class="nav nav-tabs">
        <!--<router-link to="News"></router-link>-->
        <!--<router-link to="Message"></router-link>-->
        <li><router-link to="news">News</router-link></li>
        <li><router-link to="/home/message">Message</router-link></li>
      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {}
</script>

<style scoped>

</style>
