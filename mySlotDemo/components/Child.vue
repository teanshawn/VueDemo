<template>
  <div class="childComponment">
       <span>这是子组件childComponment的正常内容!</span>
       <div class="header">
           <slot name="header">
               <span style="color: red;">子组件默认header-slot</span>
           </slot>
       </div>
       <div class="container">
           <!-- 如果没有指定无名slot（默认slot），父组件内多余的内容将会被抛弃 -->
           <slot>
               <span style="color: red;">子组件默认无名slot</span>
           </slot>
       </div>
       <div class="footer">
           <slot name="footer">
               <span style="color: red;">子组件默认footer-slot</span>
           </slot>
       </div>
  </div>
</template>
​
<script>
  export default {
    name: "childComponment",
    data(){
      return {
        message: ''
      }
    }
  };
</script>
<style scoped>
  .childComponment {
    font-size: 16px;
  }

  .header {
     height: 100px;
     border: 1px solid red;
     color: red;
  }

  .container {
     height: 500px;
     border: 1px solid black;
     color: black;
  }

  .footer {
     height: 100px;
     border: 1px grey solid;
     color: grey;
  }
</style>
