<template>
  <div>
    dddddddddddddddddddddddddddddddddddddddddddddddddd<br/>
    {{detail.id}}<br/>
    {{detail.title}}<br/>
    {{detail.content}}<br/>
  </div>
</template>

<script>
  const messageDetails = [
    {id: 1, title: 'Message001', content: 'message content00111....'},
    {id: 3, title: 'Message003', content: 'message content00222....'},
    {id: 5, title: 'Message005', content: 'message content00333....'}
  ]
  export default {
    data() {
      return {
        detail: {}
      }
    },
    mounted() {
      console.log(" ----------------------- mounted()" )
      const id = this.$route.params.id
      this.detail = messageDetails.find(detail => detail.id === id * 1)
    },
    watch: {
      $route: function () {
        console.log("watch----$route() --- $route.param.id = " + `${this.$route.params.id}`)
        const id = this.$route.params.id
        this.detail = messageDetails.find(m => m.id == id)
      }
    }
  }
</script>

<style scoped>

</style>
