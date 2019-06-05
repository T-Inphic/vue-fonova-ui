<template>
  <div id="app">
    <ckt-button :list="btnList" @change="change"></ckt-button>
    <ckt-button @click="change">测试按钮</ckt-button>
    <ckt-pannel
      main-title="测试主标题"
      sub-title="测试副标题"
      rType="select"
      ></ckt-pannel>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      btnList: ['按钮1','按钮2','按钮3']
    }
  },
  methods:{
    change(d){
      console.log(d)
    }
  }
}
</script>
<style>
* {
  list-style: none;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html,body,#app{
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  background-color: #fafafa;
}

html,
body {
    max-width: 750px;
    margin: auto;
    font-family: 'PingFang SC','Microsoft YaHei','Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color:rgba(0, 0, 0, 0);
}
input {
    outline: none;
}
</style>
