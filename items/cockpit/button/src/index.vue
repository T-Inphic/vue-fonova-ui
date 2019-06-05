<template>
  <div class="ckt-button">
    <div class="btn-box" v-if="!list.length">
      <fs-button>
        <slot></slot>
      </fs-button>
    </div>
    <div class="btn-box transverse" v-if="list.length">
      <fs-button v-for="(item, index) in list" :key="index" :class="{left: index>0}" @click.native="handler(item, index)">{{item}}</fs-button>
    </div>
  </div>
</template>
<script>
export default {
  name: "CktButton",
  props: {
    list: {
      type: Array,
      default: function(){
        return []
      }
    }
  },
  data() {
    return {
      value: ""
    };
  },

  methods: {
    handler(item, index) {
      this.$emit('change', {name:item,index:index})
    }
  },

  created() {},

  mounted() {}
};
</script>
<style lang="scss">
.ckt-button {
  .btn-box {
  }
  .transverse {
    display: flex;
    .left{
        margin-left: 0.1rem;
    }
  }
}
</style>

