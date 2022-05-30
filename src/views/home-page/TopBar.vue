<template>
  <div class="top-box">
    <div class="top-bar">
      <div class="title-box">
        <div class="top-menu" v-for="item in topMenuBar" :key="item.title" @click="jumpTitle">
          {{ item.title }}
        </div>
      </div>
    </div>
    <div class="icon">
      <span v-for="i in topIcon" :key="i.icon" class="fa" :class="i.icon"></span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    topMenuBar: {
      type: Array,
      default: function () {
        return [
          {
            title: '推荐',
          },
        ];
      },
    },
    topIcon: {
      type: Array,
      default: function () {
        return [
          {
            icon: 'fa-reorder',
          },
        ];
      },
    },
  },
  methods: {
    jumpTitle() {
      
    }
  },
};
</script>

<style lang="scss" scope>
.top-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 10px;
  height: 40px;
  .top-bar {
    overflow: scroll;
    margin-right: 10px;
    .title-box {
      display: flex;     
      .top-menu {
        margin-right: 10px;
        flex-shrink: 0;
      }
    }
    &::-webkit-scrollbar {
      display: none;
    }
  }
  .icon {
    display: flex;
    .fa {
      margin-left: 20px;
    }
  }
}
</style>
