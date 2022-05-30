<template>
  <div class="class-box">
    <div class="class-item" v-for="k in classBox" :key="k.cover">
      <img :src="k.cover" alt="" />
      <div class="text">
        <span>{{ k.nickname }}</span>
        <span>{{ k.playCount }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    classBox: {
      type: Array,
      default: function () {
        return [{ cover: 'picture/5.webp', nickname: '厘子', playCount: '11.2万' },];
      },
    },
  },
};
</script>

<style lang="scss" scope>
.class-box {
  overflow-y: scroll;
  height: 558px;
  display: flex;
  flex-wrap: wrap;
  .class-item {
    position: relative;
    img {
      width: 160px;
      margin-left: 18px;
      margin-top: 18px;
      border-radius: 6px;
    }
    .text {
      position: absolute;
      left: 0;
      bottom: 10px;
      margin-left: 18px;
      display: flex;
      justify-content: space-between;
      width: 160px;
      color: rgb(236, 223, 223);
    }
  }
}
</style>
