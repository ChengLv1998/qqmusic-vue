<template>
  <div class="center">
    <div class="item" v-for="(item, index) in List" :key="'f' + index">
      <div class="item-top">
        <div class="item-play">
          {{ item.name }}
        </div>
        <div class="more">
          <span class="fa" :class="icon"></span>
        </div>
      </div>
      <div class="item-box">
        <div class="item-bottom">
          <div class="ranking" v-for="i in item.itemPictureList" :key="i.picture">
            <img :src="i.picture" alt="" />
            <div class="hot-list">{{ i.pictureTitle }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: 'fa-ellipsis-h',
    },
    List: {
      type: Array,
      default: function () {
        return [
          {
            name: 'AI歌单',
            itemPictureList: [
              { picture: '../picture/7.webp', pictureTitle: '已播歌曲' },
              { picture: '../picture/8.webp', pictureTitle: '排行榜：热歌榜' },
            ],
          },
          {
            name: 'AI歌单',
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

<style lang="scss" scope>
.center {
  .item {
    .item-top {
      width: 94%;
      margin: auto;
      display: flex;
      justify-content: space-between;
    }
    .item-box {
      overflow-x: auto;
      &::-webkit-scrollbar {
        display: none;
      }
      .item-bottom {
        display: flex;
        .ranking {
          font-size: 12px;
          margin: 0 10px;
          img {
            width: 100px;
            border-radius: 6px;
          }
        }
      }
    }
  }
}
</style>
