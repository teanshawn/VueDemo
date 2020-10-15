<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <!--<titled-frame>-->
    <!--<h6 v-slot:header>-->
      <!--&lt;!&ndash; The code below goes into the header slot &ndash;&gt;-->
      <!--My Image’s Title-->
    <!--</h6>-->
    <!--&lt;!&ndash; The code below goes into the default slot &ndash;&gt;-->
    <!--<img src="an-image.jpg">-->
  <!--</titled-frame>-->
  <Parent></Parent>
</template>

<script>
  import HelloWorld from './components/HelloWorld.vue'
  import Parent from './components/Parent.vue'

  export default {
    components: {
      HelloWorld,
      Parent
    }
  }
</script>

<style>
  .logo {
    width: 100px;
    height: 100px;
  }
</style>
