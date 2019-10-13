<template>
  <div class="col-md-8">
    <h3 class="reply">评论回复：</h3>
    <h2 v-show="comments.length===0">暂无评论，点击左侧添加评论！！！</h2>
      <item :deleteComment="deleteComment" :comments="comments"/>
  </div>
</template>

<script>
  import Item from "./Item";

  export default {
    props:{
      comments : Array,
      deleteComment : Function
    },

    components: {Item},

  }


</script>

<style scoped>

</style>
