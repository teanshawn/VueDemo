<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <TodoHeader ref="header"/>
        <TodoList :todos="todos" :deleteTodo="deleteTodo"/>
        <TodoFooter v-show="todos.length" ref="footer" :todos="todos" @deleteCompleteTodos="deleteCompleteTodos"/>
      </div>
    </div>
  </div>
</template>

<script>
  import TodoHeader from './components/TodoHeader.vue'
  import TodoList from './components/TodoList.vue'
  import TodoFooter from './components/TodoFooter.vue'

  export default {
    data() {
      return {
        todos: [{title: '123', complete: true}, {title: 'qwe', complete: false}]
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
        this.todos.splice(index,1)
      },
      selectAll(flag) {
        this.todos.forEach((todo)=>todo.complete=flag)
      }
    },
    mounted() {
      this.$refs.header.$on('addTodo', this.add)
      this.$refs.footer.$on('selectAll', this.selectAll)
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
