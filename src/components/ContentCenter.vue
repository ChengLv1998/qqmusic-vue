<template>
  <div class="content-center">
    <div class="item" v-for="(item, index) in list" :key="'c' + index">
      <img :src="item.src" alt="" />
      <div class="name">
        <span>{{ item.name }}</span>
        <span>{{ item.count }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default: function () {
        return [
          {
            src: '../picture/2.webp',
            name: '收藏',
            count: 45,
          },
        ];
      },
    },
  },
};
</script>

<style lang="scss" scope>
.content-center {
  margin: auto;
  display: flex;
  width: 375px;
  overflow: auto;
  .item {
    margin-left: 10px;
  }
  &::-webkit-scrollbar {
    display: none;
  }
  img {
    width: 100px;
    height: 100px;
    border: solid 1px #bfa;
    border-radius: 10px;
  }
}
</style>
