<template>
  <div class="lately-box">
    <div class="top">
      <span class="top-left">最新动向</span>
      <span class="top-right">全部 ></span>
    </div>
    <div class="content">
      <div class="box">
        <div class="item">
          <img src="picture/20.jpg" alt="">
          <div class="text">
            <span class="singer">吴宣仪</span>
            <span class="title">晚安，小选</span>
          </div>
        </div>
        <div class="item">
          <img src="picture/20.jpg" alt="">
          <div class="text">
            <span class="singer">吴宣仪</span>
            <span class="title">晚安，小选</span>
          </div>
        </div>
      </div>
      <div class="box">
        <div class="item">
          <img src="picture/20.jpg" alt="">
          <div class="text">
            <span class="singer">吴宣仪</span>
            <span class="title">晚安，小选</span>
          </div>
        </div>
        <div class="item">
          <img src="picture/20.jpg" alt="">
          <div class="text">
            <span class="singer">吴宣仪</span>
            <span class="title">晚安，小选</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scope>
.lately-box {
  margin: 0 10px;
  .top {
    display: flex;
    justify-content: space-between;
    margin: 10px 0;
  }
  .content {
    display: flex;
    overflow-x: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
    .box {
      .item {
        display: flex;
        width: 260px;
        margin-bottom: 10px;
        img {
          width: 80px;
          border-radius: 6px;
        }
        .text {
          display: flex;
          flex-direction: column;
          justify-content: center;
          margin-left: 10px;
          .title {
            color: rgb(131, 126, 126);
            font-size: 12px;
          }
        }
      }
    }
  }
}
</style>