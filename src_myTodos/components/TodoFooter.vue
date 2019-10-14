<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="isCheckAll"/>
    </label>
    <span>
          <span>已完成{{completeSize}}</span> / 全部{{todos.length}}
    </span>
    <button class="btn btn-danger" v-show="completeSize" @click="deleteAllCompleted">清除已完成任务</button>
  </div>
</template>

<script>
  export default {
    props: {
      todos: Array
    },

    data() {
      return {
        totalSize: this.todos.length

      };
    },

    methods: {
      deleteAllCompleted() {
        if (window.confirm('确定清除已完成的吗?')) {
          this.$emit('deleteCompleteTodos')
        }
      }
    },
    computed: {
      completeSize() {
        return this.todos.reduce((pre, todo) => pre + (todo.complete ? 1 : 0), 0)
      },
      isCheckAll: {
        get() {
          return this.completeSize === this.todos.length
        },
        set(value) {
          // this.selectAll(value)
          this.$emit('selectAll', value)
        }
      }
    }
  }
</script>

<style scoped>
  .todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
  }

  .todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
  }

  .todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
  }

  .todo-footer button {
    float: right;
    margin-top: 5px;
  }
</style>
