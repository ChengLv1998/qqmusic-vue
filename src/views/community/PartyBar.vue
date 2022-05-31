<template>
  <div class="party">
    <div class="scroll">
      <div class="content" v-for="(item,index) in itemList" :key="index">
        <img :src="item.src" alt="" />
        <span class="title">{{ item.title }}</span>
        <span class="text">{{ item.text }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    itemList: {
      type: Array,
      default: function () {
        [{ src: 'picture/15.jpg', title: '吴宣仪', text: '超订直播回看(PLUS专享)' }];
      },
    },
  },
};
</script>

<style lang="scss" scope>
.party {
  .scroll {
    overflow-x: scroll;
    width: 375px;
    display: flex;
    &::-webkit-scrollbar {
      display: none;
    }
    .content {
      width: 100px;
      display: flex;
      flex-direction: column;
      padding: 6px;
      background-color: rgb(135, 169, 228);
      margin-left: 10px;
      box-sizing: border-box; 
      border-radius: 6px;
      img {
        width: 40px;
        border-radius: 50%;
        margin-bottom: 6px;
      }
      .title {
        font-size: 14px;
      }
      .text {
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        color: rgb(224, 207, 207);
        font-size: 12px;
      }
    }
  }
}
</style>
