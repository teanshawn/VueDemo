<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <TodoHeader ref="header"/>
        <TodoList :todos="todos" :deleteTodo="deleteTodo"/>
        <TodoFooter v-show="todos.length" ref="footer" :todos="todos" @deleteCompleteTodos="deleteCompleteTodos"/>
      </div>
    <button @click="deepTest" style="">深度测试</button>
      {{todosLength}}
    </div>
  </div>
</template>

<script>
  import TodoHeader from './components/TodoHeader.vue'
  import TodoList from './components/TodoList.vue'
  import TodoFooter from './components/TodoFooter.vue'
  import storageUtils from './utils/storageUtils'

  export default {
    data() {
      return {
        todos: []
      }
    },

    methods: {
      add(todo) {
        this.todos.unshift(todo)
      },
      deleteCompleteTodos() {
        this.todos = this.todos.filter(todo => !todo.complete)
      },
      deleteTodo(index) {
        this.todos.splice(index, 1)
      },
      selectAll(flag) {
        this.todos.forEach((todo) => todo.complete = flag)
      },
      deepTest() {
        this.todos[0].title='i change '
      }
    },
    mounted() {
      this.todos = storageUtils.readTodos()
      this.$refs.header.$on('addTodo', this.add)
      this.$refs.footer.$on('selectAll', this.selectAll)
    },
    computed:{
      todosLength() {
        const length = this.todos[0].title
        console.log('todos.length',length)
        return length
      }
    },
    watch:{
      todos:{
        deep:true,
        handler:function (todos) {
          console.log('todos.watch() run')
          storageUtils.saveTodos(todos)
        }
      }
    },
    components: {
      TodoHeader,
      TodoList,
      TodoFooter
    }
  }
</script>

<style>
  .todo-container {
    width: 600px;
    margin: 0 auto;
  }

  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
</style>
