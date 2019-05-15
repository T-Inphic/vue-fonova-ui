<template>
  <div class="cardBox">
    <p>上面是标题</p>
    <div class="content">
      下面是内容
    </div>
  </div>
</template>
<script>

  export default {
    name: 'ExCard',

    componentName: 'ExCard',

    inheritAttrs: false,

    data() {
      return {
        value: '测试card'
      };
    },

    methods: {

    },

    created() {
      
    },

    mounted() {
      
    }
  };
</script>
<style lang="scss">
.cardBox{
  border: 1px solid #e21961;
  width: 200px;
  height: 300px;
  padding: 20px 12px;
  p{
    margin-bottom: 20px;
  }
  .content{
    border: 1px solid #1a79d8;
    padding: 12px;
    height: 200px;
  }
}
</style>

