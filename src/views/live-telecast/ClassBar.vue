<template>
  <div class="class-bar">
    <div class="scoll-x">
      <span v-for="item in classBar" :key="item.title">{{ item.title }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    classBar: {
      type: Array,
      default: function () {
        return [{ title: '校园' }];
      },
    },
  },
};
</script>

<style lang="scss" scope>
.class-bar {
  height: 24px;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  .scoll-x {
    display: flex;
    span {
      margin: 0 20px;
      flex-shrink: 0;
    }
  }
}
</style>
