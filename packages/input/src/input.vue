<template>
  <div>
    <input type="text" v-model="value"/>
    <div class="btn">
      21321
    </div>
  </div>
</template>
<script>

  export default {
    name: 'FsInput',

    componentName: 'FsInput',

    inheritAttrs: false,

    data() {
      return {
        value: '测试'
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
input{
  width: 2rem
}
.btn{
  width: 2rem;
  height: 0.8rem;
  color: #fff;
  background-color: red;
}
</style>
