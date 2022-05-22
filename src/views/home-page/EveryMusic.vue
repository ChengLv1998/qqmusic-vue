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
      <div class="box">
        <div class="box-item">
          <div class="item">
            <div class="bottom-left">
              <img :src="picture" alt="" />
              <div class="text">
                <div class="text-top">
                  <span class="name">{{ name }}</span>
                  <span class="fa" :class="icon3"></span>
                </div>
                <div class="text-bottom">{{ textName }}</div>
              </div>
            </div>
            <div class="bottom-right">
              <span class="fa" :class="icon4"></span>
            </div>
          </div>
          <div class="item">
            <div class="bottom-left">
              <img :src="picture" alt="" />
              <div class="text">
                <div class="text-top">
                  <span class="name">{{ name }}</span>
                  <span class="fa" :class="icon3"></span>
                </div>
                <div class="text-bottom">{{ textName }}</div>
              </div>
            </div>
            <div class="bottom-right">
              <span class="fa" :class="icon4"></span>
            </div>
          </div>
        </div>
        <div class="box-item">
          <div class="item">
            <div class="bottom-left">
              <img :src="picture" alt="" />
              <div class="text">
                <div class="text-top">
                  <span class="name">{{ name }}</span>
                  <span class="fa" :class="icon3"></span>
                </div>
                <div class="text-bottom">{{ textName }}</div>
              </div>
            </div>
            <div class="bottom-right">
              <span class="fa" :class="icon4"></span>
            </div>
          </div>
          <div class="item">
            <div class="bottom-left">
              <img :src="picture" alt="" />
              <div class="text">
                <div class="text-top">
                  <span class="name">{{ name }}</span>
                  <span class="fa" :class="icon3"></span>
                </div>
                <div class="text-bottom">{{ textName }}</div>
              </div>
            </div>
            <div class="bottom-right">
              <span class="fa" :class="icon4"></span>
            </div>
          </div>
        </div>
        <div class="box-item">
          <div class="item">
            <div class="bottom-left">
              <img :src="picture" alt="" />
              <div class="text">
                <div class="text-top">
                  <span class="name">{{ name }}</span>
                  <span class="fa" :class="icon3"></span>
                </div>
                <div class="text-bottom">{{ textName }}</div>
              </div>
            </div>
            <div class="bottom-right">
              <span class="fa" :class="icon4"></span>
            </div>
          </div>
          <div class="item">
            <div class="bottom-left">
              <img :src="picture" alt="" />
              <div class="text">
                <div class="text-top">
                  <span class="name">{{ name }}</span>
                  <span class="fa" :class="icon3"></span>
                </div>
                <div class="text-bottom">{{ textName }}</div>
              </div>
            </div>
            <div class="bottom-right">
              <span class="fa" :class="icon4"></span>
            </div>
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
    icon3: {
      type: String,
      default: 'fa-heart-o',
    },
    icon4: {
      type: String,
      default: 'fa-youtube-play',
    },
    picture: {
      type: String,
      default: '../picture/9.webp',
    },
    textName: {
      type: String,
      default: '陈奕迅-黑白灰',
    },
    name: {
      type: String,
      default: '十年',
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
    .box {
      display: flex;
      .box-item {
        width: 200px;
        height: 200px;
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
}
</style>
