<template>
  <div>
    <form>
      <h1>About</h1>
      <h4>{{msg}}</h4>
      <hr>
      <input type="text" v-model.lazy="text"/>
      <h6>{{text}}</h6>
      <hr>
      <input type="radio" v-model="picked" value="a">{{picked}}<br/>
      <input type="radio"><br/>
      <!--<input type="radio" v-model="picked2" >{{picked2}}-->
      <hr>
      number: <input type="number" min="0" max="100" step="25">
      range:<input type="range" min="0" max="100" step="5" v-model="rangeNum">{{rangeNum}}
      <hr>
      <input type="date">
      <input type="time">
      <input type="datetime">
      <input type="month">
      <input type="week">
      <input type="datetime-local">
      <hr>
      <input type="color" v-model="color"/>{{color}}
      <hr>
      <input type="email" required>
      <hr>
      <input type="submit" value="提交">
    </form>

    <select></select>
  </div>

</template>

<script>
  export default {
    props: {msg: String},
    data() {
      return {
        text: '',
        picked: '',
        picked2: false,
        rangeNum: 50,
        color: '',

      }
    },

  }
</script>

<style scoped>

</style>
