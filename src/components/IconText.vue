<template>
  <div class="icon">
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
};
</script>

<style lang="scss" scoped>
.icon {
  color: yellowgreen;
}
</style>
