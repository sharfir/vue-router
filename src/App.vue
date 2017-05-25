<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <div>
      <test></test>
      <ul>
        <li><router-link to="/first">点我跳转第一页</router-link></li>
        <li><router-link to="/last">点我跳转第二页</router-link></li>
      </ul>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import test from './component/a.vue';
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{test}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
