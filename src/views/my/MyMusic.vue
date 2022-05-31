<template>
  <div class="my">
    <div class="my-box">
      <div class="me">我的</div>
      <div class="other">
        <span>
          <i class="fa fa-leaf"></i>
        </span>
        <span>
          <i class="fa fa-envelope"></i>
        </span>
        <span>
          <i class="fa fa-bars"></i>
        </span>
      </div>
    </div>
    <div class="content-box">
      <input type="text" class="input" placeholder="孤勇者 陈奕迅  正在热搜" />
      <SelfCenter
        v-for="(item, index) in seltCenterLIST"
        :key="'d' + index"
        :headPicture="item.headPicture"
        :userName="item.userName"
        :rightList="right"
        v-on:a="mehod1"
        @b="mehod2"
      ></SelfCenter>
      <ContentCenter :list="contentList"></ContentCenter>
      <ItemOthers :list="list"></ItemOthers>
    </div>
    <div class="bottom-bar">
      <MusicPlay class="player"></MusicPlay>
      <IconText></IconText>
    </div>
  </div>
</template>

<script>
import SelfCenter from '../../components/SelfCenter.vue';
import ContentCenter from '../../components/ContentCenter.vue';
import ItemOthers from '../../components/ItemOthers.vue';
import IconText from '@/components/IconText.vue';
import MusicPlay from '@/components/MusicPlay.vue';
import axios from 'axios';
export default {
  components: {
    SelfCenter,
    ContentCenter,
    ItemOthers: ItemOthers,
    IconText,
    MusicPlay,
  },
  created() {
    // https://autumnfish.cn/search?keywords=五月天
    // https://autumnfish.cn/song/url?id='+musicId
    // http://m8.music.126.net/20220509001635/fa70c831a5d27f43fabe40fbf0f865fe/ymusic/abd5/5f7f/a70a/6546cdba350cd5cbc7dfe160ae756818.mp3

    axios
      .get('https://autumnfish.cn/search?keywords=五月天')
      .then(function (response) {
        console.log('获取到的歌曲列表:', response);
      })
      .catch(function (error) {
        console.log(error);
      });

    axios
      .get('https://autumnfish.cn/song/url?id=38259')
      .then(function (response) {
        console.log('获取到的单首歌曲信息:', response);
      })
      .catch(function (error) {
        console.log(error);
      });
  },
  // mounted(){
  //   const that = this;
  //    setTimeout(function() {
  //       console.log(1111, that)
  //       that.music = '倔强-五月天'
  //     }, 3000);
  // },
  data() {
    return {
      seltCenterLIST: [
        {
          headPicture: '../picture/1.webp',
          userName: 'AAAA',
        },
      ],
      right: [
        { count: 0, className: '关注' },
        { count: 0, className: '新歌' },
      ],
      contentList: [
        { src: '../picture/2.webp', name: '收藏', count: '45' },
        { src: '../picture/3.webp', name: '本地', count: '2' },
        { src: '../picture/4.webp', name: '歌单', count: '3' },
        { src: '../picture/5.webp', name: '电台', count: '' },
        { src: '../picture/6.webp', name: '已购', count: '' },
      ],
      list: [
        {
          name: '最近播放',
          itemPictureList: [
            { picture: '../picture/7.webp', pictureTitle: '已播歌曲' },
            { picture: '../picture/8.webp', pictureTitle: '排行榜：热歌榜' },
            { picture: '../picture/9.webp', pictureTitle: '排行榜：流行指数榜' },
          ],
        },
        {
          name: '自建歌单',
          itemPictureList: [
            { picture: '../picture/10.webp', pictureTitle: '欧美流行' },
            { picture: '../picture/11.webp', pictureTitle: '电音' },
            { picture: '../picture/12.webp', pictureTitle: '民谣' },
            { picture: '../picture/13.jpg', pictureTitle: '国风' },
            { picture: '../picture/14.jpg', pictureTitle: '深度专注' },
          ],
        },
        {
          name: 'AI歌单',
          itemPictureList: [
            { picture: '../picture/15.jpg', pictureTitle: '歌单1' },
            { picture: '../picture/16.jpg', pictureTitle: '歌单2' },
            { picture: '../picture/17.jpg', pictureTitle: '歌单3' },
          ],
        },
        {
          name: '智能分类',
          itemPictureList: [
            { picture: '../picture/18.jpg', pictureTitle: '经常在听' },
            { picture: '../picture/19.jpg', pictureTitle: '好友在听' },
          ],
        },
      ],
      
    };
  },
  methods: {
    mehod1() {
      alert('你点了左边');
    },
    mehod2() {
      // alert('你点了右边')
      this.music = '泡沫-邓紫棋';
    },
    // searchMusic:function(){
    //   axios.get('https://autumnfish.cn/search?keywords=this.query')
    //   .then(function(response){
    //     console.log(response);
    //   }),function(err){
    //     console.log(err)
    //   }
    // }
    jump(path) {
      console.log('跳转');
      this.$router.push(path);
    },
  },
};
</script>

<style lang="scss" scope>
* {
  margin: 0;
  padding: 0;
}
.my {
  background-color: rgb(233, 238, 232);
  width: 375px;
  height: 667px;
  .my-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 40px;
    .me {
      margin-left: 10px;
      font-size: 20px;
    }
    span {
      margin: 0 10px;
    }
  }
  .content-box {
    height: 582px;
    overflow-y: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
    .input {
      width: 80%;
      height: 26px;
      border-radius: 26px;
      padding: 0 10px;
      margin-left: 26px;
    }
  }
  .bottom-bar {
    position: relative;
    .player {
      position: absolute;
      top: -40px;
      left: 20px;
    }
  }
}
</style>
