<template>
  <div>
    <ul>
      <li v-for="(msg,index) in msgs" :key="index">
        <router-link :to="`/home/message/detail/${msg.id}`">{{msg.title}}</router-link>

        <button @click="push(msg.id)">push</button>
        <button @click="replace(msg.id)">replace</button>
      </li>
    </ul>
    <button @click="$router.back()">$router.back()</button>
    <button @click="$router.go(-1)">$router.go(-1)</button>
    <hr>
    <!--<keep-alive>-->
      <router-view></router-view>
    <!--</keep-alive>-->
  </div>
</template>

<script>
  export default {
    data() {
      return {
        msgs: []
      }
    },
    mounted() {
      setTimeout(() => {
        const messages = [
          {id: 1, title: 'Message001'},
          {id: 3, title: 'Message003'},
          {id: 5, title: 'Message005'}
        ]
        this.msgs = messages
      }, 200)
    },
    methods: {
      push(id) {
        this.$router.push(`/home/message/detail/${id}`)
      },
      replace(id) {
        this.$router.replace(`/home/message/detail/${id}`)
      }
    }

  }
</script>

<style scoped>

</style>
