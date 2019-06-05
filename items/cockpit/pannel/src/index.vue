<template>
  <div class="ckt-pannel">
    <div class="head" :class="{'fs-1px-b': bline}">
      <div class="left">
        <span>{{mainTitle}}</span>
        <span>{{subTitle}}</span>
      </div>
      <div class="right" v-if="rType != 'none'">
        <slot v-if="rType == 'custom'"></slot>
        <p v-if="rType == 'detail'">详情 ></p>
        <div class="select" v-if="rType == 'select'">
          <p class="icon selectIcon" @click="show = true">这是下拉框</p>
          <transition name="dropdown">
            <div class="dropdown" v-show="show">
              <div>3213213</div>
              <div>3213213</div>
              <div>3213213</div>
              <div>3213213</div>
              <div>3213213</div>
              <div>3213213</div>
              <div>3213213</div>
              <div>3213213</div>
              <div>3213213</div>
              <div>3213213</div>
              <div>3213213</div>
            </div>
          </transition>
        </div>
      </div>
    </div>
    <div class="body"></div>
  </div>
</template>
<script>
/**
 * ckt-pannel
 * @module items/cockpit/pannel
 * @desc 外框组件
 * @param {string} [mainTitle] - 显示主标题
 * @param {string} [subTitle] - 显示次标题
 * @param {boolean} [bline=true] - 是否显示标题栏下边框border，默认true
 * @param {string} [rType] - 接收none（无）、detail（详情）、select（下拉框）、custom（自定义），默认无
 *
 * @example
 * <ckt-pannel :main-title="mainTitle" :sub-title="subTitle"></ckt-pannel>
 */

export default {
  name: "CktPannel",
  props: {
    mainTitle: {
      type: String
    },
    subTitle: {
      type: String
    },
    bline: {
      type: Boolean,
      default: true
    },
    rType: {
      type: String,
      default: "none"
    },
    selectList: {
      type: Array,
      default: function() {
          return []
      }
    }
  },
  data() {
    return {
      show: false
    };
  },
  methods: {
    closeMask(e) {
      if (
        this.show &&
        e.target.className.indexOf("dropdownItem") == -1 &&
        e.target.className.indexOf("selectIcon") == -1
      ) {
        this.show = false;
      }
    }
  },

  mounted() {
    document
      .getElementsByTagName("body")[0]
      .addEventListener("click", this.closeMask, false);
  },
  destroyed() {
    document
      .getElementsByTagName("body")[0]
      .removeEventListener("click", this.closeMask, false);
  }
};
</script>
<style lang="scss">
.ckt-pannel {
  .head {
    height: 0.4rem;
    .left {
      float: left;
    }
    .right {
      float: right;
    }
    &.fs-1px-b {
      &:after {
        border-color: red;
      }
    }
  }
  .body {
  }
  .dropdown-enter-active,
  .dropdown-leave-active {
    opacity: 1;
    transform: scaleY(1);
    transition: transform 300ms cubic-bezier(0.23, 1, 0.32, 1),
      opacity 300ms cubic-bezier(0.23, 1, 0.32, 1);
    transform-origin: center top;
  }
  .dropdown-enter,
  .dropdown-leave-active {
    opacity: 0;
    transform: scaleY(0);
  }
}
</style>

