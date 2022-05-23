<template>
  <div class="play">
    <img id="top" :src="topCover" alt="" />
    <img id="bottom" :src="bottomCover" alt="" />
    <div class="left">
      <span>{{ music }}</span>
    </div>
    <div class="right">
      <i class="fa fa-play-circle-o" @click="play" v-show="!isShow"></i>
      <i class="fa fa-pause" @click="play" v-show="isShow"></i>
      <i class="fa fa-bars"></i>
    </div>
    <audio id="player" src="mp3/476677.mp3"></audio>
  </div>
</template>

<script>
export default {
  props: {
    topCover: {
      type: String,
      default: '../picture/20.jpg',
    },
    bottomCover: {
      type: String,
      default: '../picture/21.jpg',
    },
    music: {
      type: String,
      default: '日不落-蔡依林',
    },
  },
  data(){
    return {
      audio: null,
      playing: false,
      isShow:false,
    }
  },
  mounted() {
    this.audio = document.getElementById('player')
  },
  methods: {
    play() {
      this.isShow=!this.isShow
      if (this.playing) {
        // 暂停
        this.playing = false;
        this.audio.pause();
      } else {
        this.playing = true;
        // 播放api
        this.audio.play()
      }
    },
    fn() {
      console.log()
    }
  },
};
</script>

<style lang="scss">
.play {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  position: absolute;
  top: -40px;
  margin: auto;
  width: 90%;
  height: 40px;
  background-color: rgb(173, 146, 165);
  border-radius: 20px;
  #top {
    width: 50px;
    position: absolute;
    left: -3px;
    top: -5px;
    border-radius: 4px;
    z-index: 100;
  }
  #bottom {
    width: 40px;
    position: absolute;
    left: 14px;
    border-radius: 50%;
  }
  .left {
    margin-left: 70px;
  }
  .right {
    margin-right: 20px;
    .myaudio {
      position: absolute;
      top: 0;
      right: 0;
    }
    i {
      margin-left: 20px;
    }
  }
}
</style>
