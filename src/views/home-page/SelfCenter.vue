<template>
  <div class="selfCenter">
    <div class="top">
      <div class="left">
        <img :src="headPicture" alt="" />
        <span>{{ name }}</span>
        <span :class="iconName" class="fa"></span>
      </div>
      <div class="right">
        <span>{{ value }}</span>
        <span>></span>
      </div>
    </div>
    <div class="bottom">
      <div class="item" v-for="(item, index) in typeCoverList" :key="'a' + index">
        <div class="typeCover"><img :src="item.typeCover" alt="" /></div>
        <div class="typeName">{{ item.typeName }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    headPicture: {
      type: String,
      default: '/picture/2.webp',
    },
    name: {
      type: String,
      default: 'AAAA',
    },
    iconName: {
      type: String,
      default: 'fa-music',
    },
    value: {
      type: String,
      default: '《体面》独特值+1.74',
    },
    typeCoverList: {
      type: Array,
      default() {
        return [
          {
            typeCover: '/picture/3.webp',
            typeName: '你的承诺-海明威',
          },
        ];
      },
    },
  },
};
</script>

<style lang="scss" scope>
.selfCenter {
  .top {
    width: 90%;
    height: 40px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .left {
      display: flex;
      align-items: center;
      img {
        width: 40px;
        border-radius: 50%;
      }
      span {
        margin-left: 10px;
      }
    }
  }
  .bottom {
    display: flex;
    overflow-x: auto;
    &::-webkit-scrollbar {
      display: none;
    }
    .item {
      margin: 0 10px;
      font-size: 12px;
      img {
        width: 100px;
        height: 100px;
        border-radius: 4px;
      }
    }
  }
}
</style>
