<template>
  <div class="bottom-menu">
    <div class="icon" @click="jumpTo(item.path)" v-for="(item, index) in barList" :key="index">
      <i :class="'fa-' + item.iconName" class="fa"></i>
      <div>{{ item.title }}</div>
      <!-- <span v-if="count>=0">{{count}}</span> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'IconText', //可以不写
  methods: {
    jumpTo(path) {
      this.$router.push(path);
    },
  },
  data() {
    return {
      barList: [
        { title: '首页', iconName: 'music', path: '/HomePage' },
        { title: '直播', iconName: 'video-camera', path: '/Living' },
        { title: '视频', iconName: 'toggle-right', path: '/MV' },
        { title: '社区', iconName: 'comment-o', path: '/community' },
        { title: '我的', iconName: 'user-circle', path: '/' },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.bottom-menu {
  position: relative;
  display: flex;
  justify-content: space-around;
  .icon {
    color: yellowgreen;
    text-align: center;
  }
}
</style>
