<template>
  <ul class="list-group">
    <li class="list-group-item" v-for="(comment , index) in comments" :key="index">
      <div class="handle">
        <a href="javascript:;" @click="deleteComment(index)">删除</a>
      </div>
      <p class="user"><span>{{comment.userName}}</span><span>说:</span></p>
      <p class="centence">{{comment.content}}</p>
    </li>
  </ul>
</template>

<script>
  export default {
    props: {
      comments: Array,
      deleteComment: Function
    },
    data() {
      return {
        userName: 'kael',
        content: 'sun strik!!!!'
      }
    }
  }
</script>

<style scoped>

</style>
