<template>
  <div>
    <h3>message</h3>
    <ul>
      <li v-for="m in messages" :key="m.id">
        <router-link :to="`/home/message/detail/${m.id}`">
          {{m.title}}
        </router-link>
        <button @click="push(m.id)">push</button>
        <button @click="replace(m.id)">replace</button>
      </li>
    </ul>
    <button @click="$router.back()">back</button>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        messages: []
      }
    },
    mounted() {
      setTimeout(() => {
        const messages = [
          {id: 1, title: 'Message001'},
          {id: 3, title: 'Message003'},
          {id: 5, title: 'Message005'}
        ]
        this.messages = messages
      }, 500)
    },
    methods: {
      push(id) {
        this.$router.push('/home/message/detail/'+id)
      },
      replace(id) {
        this.$router.replace(`/home/message/detail/${id}`)
      }
    }
  }
</script>

<style scoped>

</style>
