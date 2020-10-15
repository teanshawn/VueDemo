<template xmlns:v-slot="http://www.w3.org/1999/xhtml">
  <div class="home">
    <child>
      <div class="home">
        <child-componment>
          <!--<h1 slot="header">-->
          <!--<h1 v-slot:header>-->
            <!--<h1>-->
              <!--父组件的header-->
            <!--</h1>-->
          <!--</h1>-->
          <!--<h6 v-slot:footer>父组件的footer</h6>-->
          <!--<h6>父组件的无名slot-1</h6>-->
          <!--<p>-->
            <!--父组件的无名slot-2-->
          <!--</p>-->

          <template v-slot:header>
            <h1>
              父组件的header
            </h1>
          </template>
          <template v-slot:footer>父组件的footer</template>
          <h6>父组件的无名slot-1</h6>
          <p>
            父组件的无名slot-2
          </p>
        </child-componment>
      </div>
    </child>
  </div>
</template>
<script>
  import child from './Child.vue'
  export default {
    name: "home",
    components:{
      childComponment:child
    },
    data(){
      return {
        message: ''
      }
    }
  };
</script>
<style></style>
