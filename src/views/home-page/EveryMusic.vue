<template>
  <div class="everyMusic">
    <div class="top">
      <div class="top-left">
        <span class="listen">{{ listen }}</span>
        <span class="fa" :class="icon1"></span>
      </div>
      <div class="top-right">
        <span class="fa" :class="icon2"></span>
      </div>
    </div>
    <div class="bottom">
      <div class="box-item" v-for="(item,index) in bottomList" :key="'s'+index">
        <div class="item" v-for="(i,index) in item.itemList" :key="'p'+index">
          <div class="bottom-left">
            <img :src="i.picture" alt="" />
            <div class="text">
              <div class="text-top">
                <span class="name">{{ i.name }}</span>
                <span class="fa" :class="i.icon3"></span>
              </div>
              <div class="text-bottom">{{ i.textName }}</div>
            </div>
          </div>
          <div class="bottom-right">
            <span class="fa" :class="i.icon4"></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    listen: {
      type: String,
      default: '大家都在听',
    },
    icon1: {
      type: String,
      default: 'fa-play-circle',
    },
    icon2: {
      type: String,
      default: 'fa-ellipsis-h',
    },
    bottomList:{
      type:Array,
      default() {
        return [
          {
            itemList:[
              {icon3:'fa-heart-o'},
              {icon4:'fa-youtube-play'},
              {picture:'../picture/9.webp'},
              {textName:'陈奕迅-黑白灰'},
              {name:'十年'}
            ]
          }
        ]
      }
    },
    
  },
};
</script>

<style lang="scss" scope>
.everyMusic {
  .top {
    width: 94%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 40px;
    .top-left {
      span {
        margin-right: 10px;
      }
    }
  }
  .bottom {
    overflow-x: auto;
    height: 150px;
    &::-webkit-scrollbar {
      display: none;
    }
    .box-item {
      margin: 0 10px;
      .item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 14px;
        margin-bottom: 10px;
        .bottom-left {
          display: flex;
          align-items: center;
          img {
            width: 50px;
            border-radius: 6px;
            margin-right: 10px;
          }
        }
      }
    }
  }
}
</style>
