<template>
  <div id="app">
    <div>
      <header class="site-header jumbotron">
        <div class="container">
          <div class="row">
            <div class="col-xs-12">
              <h1>请发表对React的评论</h1>
            </div>
          </div>
        </div>
      </header>
      <div class="container">
        <add :addComment="addComment" :deleteComment="deleteComment"/>
        <list :comments="comments" :deleteComment="deleteComment"/>
      </div>
    </div>
  </div>
</template>

<script>
  import Add from './components/Add'
  import List from './components/List'


  export default {
    data () {
      return {
        comments:[{userName:"kobe",content:"i am a raper.."}]
      }
    },

    methods: {
      addComment(item) {
        this.comments.unshift(item)
      },
      deleteComment(index) {
        this.comments.splice(index,1)
      }
    },


    components: {
      Add,
      List
    }
  }
</script>

<style>
  .reply {
    margin-top: 0px;
  }

  li {
    transition: .5s;
    overflow: hidden;
  }

  .handle {
    width: 40px;
    border: 1px solid #ccc;
    background: #fff;
    position: absolute;
    right: 10px;
    top: 1px;
    text-align: center;
  }

  .handle a {
    display: block;
    text-decoration: none;
  }

  .list-group-item .centence {
    padding: 0px 50px;
  }

  .user {
    font-size: 22px;
  }
</style>
