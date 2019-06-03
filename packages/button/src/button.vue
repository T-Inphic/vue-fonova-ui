<template>
  <div class="fs-btn">
    <slot></slot>
    <ul v-if="list.length">
      <li v-for="(item, index) in list" :key="index" @click="handle(item, index)">{{item}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "FsButton",

  componentName: "FsButton",

  inheritAttrs: false,
  props: {
    list: {
      type: Array,
      default: []
    }
  },
  data() {
    return {};
  },
  methods: {
    handle(item, index){
      this.$emit('change', {'name':item,'index':index})
    }
  }
};
</script>

<style lang="scss">
@import "../../../src/style/var.scss";
.fs-btn {
  ul{
    display: flex;
  }
  li{
    
  }
}
</style>


