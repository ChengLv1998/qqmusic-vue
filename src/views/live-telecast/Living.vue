<template>
  <div class="living">
    <TopBar :topMenuBar="topMenuBar" :topIcon="topIcon"></TopBar>
    <ClassBar :classBar="classBar"></ClassBar>
    <ClassBox :classBox="classBox"></ClassBox>
    <div class="bottom-bar">
      <MusicPlay class="player"></MusicPlay>
      <IconText></IconText>
    </div>
  </div>
</template>

<script>
import TopBar from '@/views/home-page/TopBar.vue';
import ClassBar from '@/views/live-telecast/ClassBar.vue';
import ClassBox from '@/views/live-telecast/ClassBox.vue';
import IconText from '@/components/IconText.vue';
import MusicPlay from '@/components/MusicPlay.vue';
export default {
  components: {
    TopBar,
    ClassBar,
    ClassBox,
    IconText,
    MusicPlay,
  },
  data() {
    return {
      topMenuBar: [{ title: '听见' }, { title: '看见' }, { title: '交友' }, { title: '精选' }],
      topIcon: [{ icon: 'fa-audio-description' }, { icon: 'fa-plus' }],
      classBar: [
        { title: '校园' },
        { title: '男神' },
        { title: '配音' },
        { title: '音乐人' },
        { title: '助眠' },
      ],
      classBox: [
        { cover: 'picture/5.webp', nickname: '厘子', playCount: '11.2万' },
        { cover: 'picture/6.webp', nickname: '大姚', playCount: '3.9万' },
        { cover: 'picture/7.webp', nickname: '徐长卿', playCount: '3.6万' },
        { cover: 'picture/8.webp', nickname: '黛亦', playCount: '1.2万' },
        { cover: 'picture/9.webp', nickname: '叁斤', playCount: '2.7万' },
        { cover: 'picture/10.webp', nickname: '神明', playCount: '2.9万' },
        { cover: 'picture/11.webp', nickname: '熏熏', playCount: '2.7万' },
        { cover: 'picture/12.webp', nickname: '卡卡', playCount: '2.1万' },
        { cover: 'picture/20.jpg', nickname: '皮八万', playCount: '2.8万' },
        { cover: 'picture/21.jpg', nickname: '洛枳', playCount: '3.3万' },
      ],
    };
  },
};
</script>

<style lang="scss" scope>
.living {
  background-color: rgb(233, 238, 232);
  width: 375px;
  height: 667px;
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
