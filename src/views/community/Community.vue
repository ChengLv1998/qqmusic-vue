<template>
  <div class="mv">
    <TopBar :topMenuBar="topMenuBar" :topIcon="topIcon"></TopBar>
    <SearchBar></SearchBar>
    <PartyBar :itemList="itemList"></PartyBar>
    <Lately></Lately>
  </div>
</template>

<script>
import TopBar from '@/views/home-page/TopBar.vue';
import SearchBar from '@/views/home-page/SearchBar.vue';
import PartyBar from '@/views/community/PartyBar.vue';
import Lately from '@/views/community/Lately.vue';
export default {
  components: {
    TopBar,
    SearchBar,
    PartyBar,
    Lately
  },
  data() {
    return {
      topMenuBar: [{ title: '广场' }, { title: '关注' }],
      topIcon: [],

      itemList: [
        {src:'picture/15.jpg',title:'吴宣仪',text:'超订直播回看(PLUS专享)'},
        {src:'picture/16.jpg',title:'原际画',text:'画画世界童真时刻'},
        {src:'picture/17.jpg',title:'王怡人直播',text:'陪你过六一啦！'},
        {src:'picture/18.jpg',title:'扑淘商城',text:'电磁牛仔·周 抢先开售'},
        {src:'picture/19.jpg',title:'扑通空降',text:'明星翻牌现场'},
        {src:'picture/20.jpg',title:'扑通派对',text:'语音趣聊等你来'},
        {src:'picture/21.jpg',title:'扑通星球',text:'来扩列聊天'},
      ]
    };
  },
};
</script>

<style lang="scss" scope>
* {
  margin: 0;
  padding: 0;
}
.mv {
  background-color: rgb(233, 238, 232);
  width: 375px;
  height: 667px;
}
</style>
