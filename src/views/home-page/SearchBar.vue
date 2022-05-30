<template>
  <div class="searchBar">
    <div class="search">
      <span class="fa fa-search"></span>
      <input type="text" class="input" :placeholder="value" />
    </div>
    <span :class="iconName" class="fa"></span>
  </div>
</template>

<script>
export default {
  props: {
    iconName: {
      type: String,
      default: 'fa-paper-plane-o',
    },
    value: {
      type: String,
      default: '本草纲目 连续在榜22天',
    },
  },
};
</script>

<style lang="scss" scope>
.searchBar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  margin: 0 10px;
  .search {
      margin: auto;
      position: relative;
    .input {
      height: 26px;
      border-radius: 26px;
      min-width: 270px;
      padding-left: 26px;
    }
    .fa-search {
      position: absolute;
      left: 8px;
      top: 7px;
    }
  }
}
</style>
