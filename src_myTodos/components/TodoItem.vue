<template>
  <li :style="{backgroundColor:bgColor}" @mouseenter="handleEnter(true)" @mouseleave="handleEnter(false)">
    <label>
      <input type="checkbox" v-model="todo.complete"/>
      <span>{{todo.title}}</span>
    </label>
    <button class="btn btn-danger" v-show="isShow" @click="deleteThis(index)">删除</button>
  </li>
</template>

<script>
  export default {
    props: {
      todo: Object,
      deleteTodo: Function,
      index: Number
    },
    data() {
      return{
        bgColor: 'white',
        isShow: false
    }
    },
    methods: {
      deleteThis(index) {
        this.deleteTodo(index)
      },
      handleEnter(flag){
        if(flag) { // 进入
          this.bgColor = '#cccccc'
          this.isShow = true
        } else { // 离开
          this.bgColor = '#ffffff'
          this.isShow = false
        }
      }
    }
  }
</script>

<style scoped>
  li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
  }

  li label {
    cursor: pointer;
  }

  li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
  }

  li button {
    float: right;
    /*display: none;*/
    margin-top: 3px;
  }

  li:before {
    content: initial;
  }

  li:last-child {
    border-bottom: none;
  }
</style>
