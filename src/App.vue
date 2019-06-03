<template>
  <div id="app">
    <fs-input></fs-input>
    <fs-button
    :list="btnList"
    />
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      btnList: ['按钮1','按钮2','按钮3']
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
