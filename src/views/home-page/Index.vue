<template>
  <div class="home-page">
    <TopBar :topMenuBar="topMenuBar"></TopBar>
    <div class="mid">
      <SearchBar></SearchBar>
      <SelfCenter
        :headPicture="seltCenterList.headPicture"
        :name="seltCenterList.name"
        :iconName="seltCenterList.iconName"
        :typeCoverList="seltCenterList.typeCoverList"
      ></SelfCenter>
      <EveryMusic
        :listen="allPeople.listen"
        :icon1="allPeople.icon1"
        :icon2="allPeople.icon2"
        :bottomList="allPeople.bottomList"
      ></EveryMusic>
      <List :list="list"></List>
    </div>
    <div class="bottom-menu">
      <MusicPlay></MusicPlay>
      <IconText
        :title="item.title"
        :iconName="item.iconName"
        v-for="(item, index) in barList"
        :key="'b' + index"
        @jumpTo="jump(item.path)"
      ></IconText>
    </div>
  </div>
</template>

<script>
import TopBar from '@/views/home-page/TopBar.vue';
import SearchBar from '@/views/home-page/SearchBar.vue';
import SelfCenter from '@/views/home-page/SelfCenter.vue';
import List from '@/views/home-page/List.vue';
import EveryMusic from '@/views/home-page/EveryMusic.vue';
import IconText from '@/components/IconText.vue';
import MusicPlay from '@/components/MusicPlay.vue';

export default {
  components: {
    TopBar,
    SearchBar,
    SelfCenter,
    List,
    EveryMusic,
    IconText,
    MusicPlay,
  },

  data() {
    return {
      topMenuBar: [
        { title: '推荐' },
        { title: '音乐馆' },
        { title: '电台' },
        { title: '随便听听' },
        { title: '国风' },
        { title: '说唱' },
        { title: '摇滚' },
        { title: '欧美' },
        { title: '听书' },
        { title: '助眠' },
        { title: '电子' },
        { title: '儿童' },
        { title: '民谣' },
        { title: 'R&B' },
        { title: '播客' },
        { title: '动漫' },
        { title: '粤语' },
        { title: 'Jpop' },
        { title: 'Kpop' },
        { title: '乡村' },
        { title: '爵士' },
        { title: '古典' },
      ],
      seltCenterList: {
        headPicture: '/picture/2.webp',
        name: 'AAAA',
        iconName: 'fa-music',
        value: '《体面》独特值+1.74',
        typeCoverList: [
          {
            typeCover: '/picture/3.webp',
            typeName: '你的承诺-海明威',
          },
          {
            typeCover: '/picture/4.webp',
            typeName: '每日30首',
          },
          {
            typeCover: '/picture/5.webp',
            typeName: '红星雷达',
          },
          {
            typeCover: '/picture/6.webp',
            typeName: '热门电谷',
          },
          {
            typeCover: '/picture/7.webp',
            typeName: '专注电台',
          },
          {
            typeCover: '/picture/8.webp',
            typeName: '百万收藏',
          },
        ],
      },
      allPeople: {
        listen: '大家都在听',
        icon1: 'fa-play-circle',
        icon2: 'fa-ellipsis-h',
        bottomList: [
          {
            itemList: [
              {
                icon3: 'fa-heart-o',
                icon4: 'fa-youtube-play',
                picture: '../picture/9.webp',
                textName: '陈奕迅-黑白灰',
                name: '十年',
              },
            ],
          },
          {
            itemList: [
              {
                icon3: 'fa-heart-o',
                icon4: 'fa-youtube-play',
                picture: '../picture/10.webp',
                textName: '刘若英-年华',
                name: '成全',
              },
            ],
          },
          {
            itemList: [
              {
                icon3: 'fa-heart-o',
                icon4: 'fa-youtube-play',
                picture: '../picture/11.webp',
                textName: '朴树-猎户星座',
                name: '平凡之路',
              },
            ],
          },
          {
            itemList: [
              {
                icon3: 'fa-heart-o',
                icon4: 'fa-youtube-play',
                picture: '../picture/12.webp',
                textName: '张芸京-破天荒',
                name: '偏爱',
              },
            ],
          },
          {
            itemList: [
              {
                icon3: 'fa-heart-o',
                icon4: 'fa-youtube-play',
                picture: '../picture/16.jpg',
                textName: '安琥-天使的翅膀',
                name: '天使的翅膀',
              },
            ],
          },
          {
            itemList: [
              {
                icon3: 'fa-heart-o',
                icon4: 'fa-youtube-play',
                picture: '../picture/17.jpg',
                textName: '林俊杰-JJ陆',
                name: '我还想她',
              },
            ],
          },
        ],
      },
      list: [
        {
          name: 'AI歌单',
          itemPictureList: [
            { picture: '../picture/15.jpg', pictureTitle: '属于你的情歌' },
            { picture: '../picture/16.jpg', pictureTitle: '抖音热榜：超好听的流行歌曲' },
            { picture: '../picture/17.jpg', pictureTitle: '华语摇滚|中国摇滚新势力' },
            { picture: '../picture/18.jpg', pictureTitle: '东海岸说唱|欢迎来到"老学校"' },
            { picture: '../picture/19.jpg', pictureTitle: 'EDM|属于所有Raver的狂欢' },
            { picture: '../picture/20.jpg', pictureTitle: '浩室舞曲|跳动的音感' },
            { picture: '../picture/21.jpg', pictureTitle: '民谣：理想在何方' },
            { picture: '../picture/22.jpg', pictureTitle: '星探·原创新声赏' },
          ],
        },
        {
          name: '有趣的灵魂都在看',
          itemPictureList: [
            { picture: '../picture/23.jpg', pictureTitle: '《西海情歌》' },
            { picture: '../picture/24.jpg', pictureTitle: '献给有好好努力的你们' },
            { picture: '../picture/25.jpg', pictureTitle: '呆我眼睛里' },
            { picture: '../picture/26.jpg', pictureTitle: '宋文浩' },
            { picture: '../picture/27.jpg', pictureTitle: 'We are yang' },
            { picture: '../picture/28.jpg', pictureTitle: '排行榜：热歌榜' },
          ],
        },
        {
          name: '你的专属宝藏库',
          itemPictureList: [
            { picture: '../picture/6.webp', pictureTitle: '华语男声|深情款款，歌心共鸣' },
            { picture: '../picture/8.webp', pictureTitle: '刀郎：已是十年踪迹十年心' },
            { picture: '../picture/9.webp', pictureTitle: '这位同学，请不要上课抄歌词！' },
            { picture: '../picture/10.webp', pictureTitle: '抖音快手热歌|BGM弄潮儿' },
            { picture: '../picture/11.webp', pictureTitle: '华语伤感|从此泪水模糊了我的双眼' },
            { picture: '../picture/12.webp', pictureTitle: '校园|逝去的青春不留遗憾' },
          ],
        },
      ],
      barList: [
        { title: '首页', iconName: 'music', path: '/home-page' },
        { title: '直播', iconName: 'video-camera', path: '/Living' },
        { title: '视频', iconName: 'toggle-right', path: '/MV' },
        { title: '社区', iconName: 'comment-o', path: '/community' },
        { title: '我的', iconName: 'user-circle', path: '/' },
      ],
    };
  },
  methods: {
    jump(path) {
      console.log('跳转');
      this.$router.push(path);
    },
  },
};
</script>

<style lang="scss">
.home-page {
  background-color: rgb(233, 238, 232);
  width: 375px;
  height: 667px;
  .mid {
    width: 100%;
    height: 582px;
    overflow-y: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
  }
  .bottom-menu {
    position: relative;
    display: flex;
    justify-content: space-around;
  }
}
</style>
