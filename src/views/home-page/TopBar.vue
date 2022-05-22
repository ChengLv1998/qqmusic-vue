<template>
  <div class="top-box">
    <div class="top-bar">
      <div class="title-box">
        <div class="top-menu" v-for="item in topMenuBar" :key="item.topMenu">
          {{ item.title }}
        </div>
      </div>
    </div>
    <span class="fa fa-bars"></span>
  </div>
</template>

<script>
export default {
  props: {
    topMenuBar: {
      type: Array,
      default: function () {
        return [
          {
            title: '推荐',
          },
        ];
      },
    },
  },
};
</script>

<style lang="scss" scope>
.top-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin:  10px;
  height: 40px;
  .top-bar {
    width: 360px;
    overflow: scroll;
    .title-box {
      display: flex;
      width: 990px;
      .top-menu {
        margin-right: 10px;
      }
    }
    &::-webkit-scrollbar {
      display: none;
    }
  }
}
</style>
