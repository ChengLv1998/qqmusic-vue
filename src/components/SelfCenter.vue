<template>
  <div class="self-center">
    <div class="self-top">
      <div class="left" @click="clickLeft">
        <div class="picture">
          <img :src="headPicture" alt="" />
        </div>
        <span>
          <p class="name">{{ userName }}</p>
          <i class="fa fa-headphones"></i>
          <i class="fa fa-heart"></i>
        </span>
      </div>
      <div class="right" @click="clickRight">
        <div v-for="(item, index) in rightList" :key="'e' + index">
          <p>{{ item.count }}</p>
          <p>{{ item.className }}</p>
        </div>
      </div>
    </div>
    <div class="self-bottom">
      <div>
        <i class="fa fa-gift"></i>
        <span>活动中心</span>
      </div>
      <div>
        <i class="fa fa-heartbeat"></i>
        <span>会员中心</span>
      </div>
      <div>
        <i class="fa fa-calendar-check-o"></i>
        <span>每日签到</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    headPicture: {
      type: String,
      default: '../picture/1.webp',
    },
    userName: {
      type: String,
      default: 'AAAA',
    },
    rightList: {
      type: Array,
      default: function () {
        return [
          {
            count: 0,
            className:'关注'
          },
        ];
      },
    },
  },
  methods: {
    clickLeft() {
      this.$emit('a')
    },
    clickRight() {
      this.$emit('b')
    },
    fn() {
      console.log()
    }
  },
};
</script>

<style lang="scss">
.self-center {
  width: 90%;
  height: 100px;
  background-color: white;
  margin: 10px auto;
  border-radius: 10px;
  .self-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .left {
      display: flex;
      align-items: center;
      img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
      }
      p {
        margin: 10px 0;
      }
    }
    .right {
      display: flex;
      align-content: center;
      div {
        margin-right: 20px;
        p {
          margin: 10px 0;
        }
      }
    }
  }
  .self-bottom {
    display: flex;
    justify-content: space-around;
  }
}
</style>
