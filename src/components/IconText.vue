<template>
  <div class="icon" @click="jumpTo">
    <i :class="'fa-' + iconName" class="fa"></i>
    <div>{{title}}</div>
    <!-- <span v-if="count>=0">{{count}}</span> -->
  </div>
</template>

<script>
export default {
  name: 'IconText',//可以不写
  props: {
    title: {
      type:String,
      default:'首页',
    },
    iconName: {
      type:String,
      default: 'music',
    },
  },
  methods: {
    jumpTo() {
      this.$emit('jumpTo')
      console.log("执行")
    }
  },
};
</script>

<style lang="scss" scoped>
.icon {
  color: yellowgreen;
  text-align: center;
}
</style>
