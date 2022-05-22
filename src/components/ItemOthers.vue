<template>
  <div class="other-items">
    <div class="item" v-for="(item, index) in List" :key="'f' + index">
      <div class="item-top">
        <div class="item-play">
          {{ item.name }}
        </div>
        <div class="more">
          <span>更多</span>
          <span>></span>
        </div>
      </div>
      <div class="item-bottom">
        <div
          class="ranking"
          v-for="i in item.itemPictureList"
          :key="i.picture"
        >
          <img :src="i.picture" alt="" />
          <div class="hot-list">{{ i.pictureTitle }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    List: {
      type: Array,
      default: function () {
        return [
          {
            name: '最近播放',
            itemPictureList: [
              { picture: '../picture/7.webp', pictureTitle: '已播歌曲' },
              { picture: '../picture/8.webp', pictureTitle: '排行榜：热歌榜' },
            ],
          },
          {
            name: '自建歌单',
            itemPictureList: [
              { picture: '../picture/7.webp', pictureTitle: '已播歌曲' },
              { picture: '../picture/8.webp', pictureTitle: '排行榜：热歌榜' },
            ],
          },
        ];
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.other-items {
  .item {
    .item-top {
      display: flex;
      width: 90%;
      justify-content: space-between;
      margin: 10px auto;
      span {
        margin-left: 10px;
      }
    }
    .item-bottom {
      display: flex;
      margin: auto;
      display: flex;
      width: 375px;
      overflow-x: scroll;
      &::-webkit-scrollbar {
        display: none;
      }
      .ranking {
        margin-left: 10px;
        img {
          width: 120px;
          height: 120px;
          border: solid 1px #bfa;
          border-radius: 10px;
        }
      }
    }
  }
}
</style>
