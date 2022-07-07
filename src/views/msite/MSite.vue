<template>
  <div class="wrapper">
    <div class="position">
      <span class="iconfont position__icon">&#xe66f;</span>
      北京天安门
      <span class="iconfont position__notice">&#xe60a;</span>
    </div>
    <div class="search">
      <span class="iconfont">&#xe729;</span>
      <span class="search__text">蔚蓝星分店</span>
    </div>
    <div class="banner">
      <img class="banner__img" src="https://s1.ax1x.com/2020/05/08/Yuob6S.jpg" alt="">
    </div>
    <div class="icons">
      <div class="icons__item">
        <img class="icons__item__img" src="https://s1.ax1x.com/2020/05/12/Ytb41K.png" />
        <p class="icons__item__desc">美食</p>
      </div>
      <div class="icons__item">
        <img class="icons__item__img" src="https://s1.ax1x.com/2020/05/12/Ytb41K.png" />
        <p class="icons__item__desc">美食</p>
      </div>
      <div class="icons__item">
        <img class="icons__item__img" src="https://s1.ax1x.com/2020/05/12/Ytb41K.png" />
        <p class="icons__item__desc">美食</p>
      </div>
      <div class="icons__item">
        <img class="icons__item__img" src="https://s1.ax1x.com/2020/05/12/Ytb41K.png" />
        <p class="icons__item__desc">美食</p>
      </div>
      <div class="icons__item">
        <img class="icons__item__img" src="https://s1.ax1x.com/2020/05/12/Ytb41K.png" />
        <p class="icons__item__desc">美食</p>
      </div>
      <div class="icons__item">
        <img class="icons__item__img" src="https://s1.ax1x.com/2020/05/12/Ytb41K.png" />
        <p class="icons__item__desc">美食</p>
      </div>
      <div class="icons__item">
        <img class="icons__item__img" src="https://s1.ax1x.com/2020/05/12/Ytb41K.png" />
        <p class="icons__item__desc">美食</p>
      </div>
      <div class="icons__item">
        <img class="icons__item__img" src="https://s1.ax1x.com/2020/05/12/Ytb41K.png" />
        <p class="icons__item__desc">美食</p>
      </div>
      <div class="icons__item">
        <img class="icons__item__img" src="https://s1.ax1x.com/2020/05/12/Ytb41K.png" />
        <p class="icons__item__desc">美食</p>
      </div>
      <div class="icons__item">
        <img class="icons__item__img" src="https://s1.ax1x.com/2020/05/12/Ytb41K.png" />
        <p class="icons__item__desc">美食</p>
      </div>
    </div>
    <div class="gap"></div>
    <div class="nearby">
      <h3 class="nearby__title">推荐店铺</h3>
      <div class="nearby__item">
        <img
          src="//elm.cangdu.org/img/164ad0b6a3917599.jpg"
          class="nearby__item__img"
        >
        <div class="nearby__content">
          <div class="nearby__content__title">益和堂</div>
          <div class="nearby__content__tags">
            <span class="nearby__content__tag">月售1万+</span>
            <span class="nearby__content__tag">月售1万+</span>
            <span class="nearby__content__tag">月售1万+</span>
          </div>
          <p class="nearby__content__highlight">水煮牛肉味道很好！</p>
        </div>
      </div>
      <div class="nearby__item">
        <img
          src="//elm.cangdu.org/img/164ad0b6a3917599.jpg"
          class="nearby__item__img"
        >
        <div class="nearby__content">
          <div class="nearby__content__title">益和堂</div>
          <div class="nearby__content__tags">
            <span class="nearby__content__tag">月售1万+</span>
            <span class="nearby__content__tag">月售1万+</span>
            <span class="nearby__content__tag">月售1万+</span>
          </div>
          <p class="nearby__content__highlight">水煮牛肉味道很好！</p>
        </div>
      </div>
      <div class="nearby__item">
        <img
          src="//elm.cangdu.org/img/164ad0b6a3917599.jpg"
          class="nearby__item__img"
        >
        <div class="nearby__content">
          <div class="nearby__content__title">益和堂</div>
          <div class="nearby__content__tags">
            <span class="nearby__content__tag">月售1万+</span>
            <span class="nearby__content__tag">月售1万+</span>
            <span class="nearby__content__tag">月售1万+</span>
          </div>
          <p class="nearby__content__highlight">水煮牛肉味道很好！</p>
        </div>
      </div>
      <div class="nearby__item">
        <img
          src="//elm.cangdu.org/img/164ad0b6a3917599.jpg"
          class="nearby__item__img"
        >
        <div class="nearby__content">
          <div class="nearby__content__title">益和堂</div>
          <div class="nearby__content__tags">
            <span class="nearby__content__tag">月售1万+</span>
            <span class="nearby__content__tag">月售1万+</span>
            <span class="nearby__content__tag">月售1万+</span>
          </div>
          <p class="nearby__content__highlight">水煮牛肉味道很好！</p>
        </div>
      </div>
    </div>
  </div>
  <div class="docker">
    <div class="docker__item docker__item--active">
      <div class="iconfont">&#xe600;</div>
      <div class="docker__title">外卖</div>
    </div>
    <div class="docker__item">
      <div class="iconfont">&#xe6c6;</div>
      <div class="docker__title">发现</div>
    </div>
    <div class="docker__item">
      <div class="iconfont">&#xe69e;</div>
      <div class="docker__title">订单</div>
    </div>
    <div class="docker__item">
      <div class="iconfont">&#xe614;</div>
      <div class="docker__title">我的</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MSite'
}
</script>

<style lang="scss">
@import '@/style/viriables.scss';
@import '@/style/mixins.scss';
.wrapper {
  overflow-y: auto;
  position: absolute;
  left: 0;
  top: 0;
  bottom: .5rem;
  right: 0;
  padding: 0 .18rem .1rem .18rem;
}
.position {
  position: relative;
  padding: .16rem 0;
  line-height: .22rem;
  font-size: .16rem;
  @include ellipsis;
  .position__icon {
    position: relative;
    top: .01rem;
    font-size: .2rem;
  }
  .position__notice {
    position: absolute;
    font-size: .2rem;
    top: .17rem;
    right: 0;
  }
  color: $content-fontcolor;
}
.search {
  margin-bottom: .12rem;
  line-height: .32rem;
  background: #f5f5f5;
  color: #b7b7b7;
  border-radius: .16rem;
  font-size: .14rem;
  .iconfont {
    display: inline-block;
    padding: 0 .08rem 0 .16rem;
  }
  &__text {
    display: inline-block;
    font-size: .16rem;
  }
}
.banner {
  height: 0;
  overflow: hidden;
  padding-bottom: 25%;
  &__img {
    width: 100%;
  }
}
.icons {
  display: flex;
  flex-wrap: wrap;
  margin-top: .16rem;
  &__item {
    width: 20%;
    &__img {
      display: block;
      width: .4rem;
      height: .4rem;
      margin: 0 auto;
    }
    &__desc {
      margin: .06rem 0 .16rem 0;
      text-align: center;
      color: $content-fontcolor;
    }
  }
}
.gap {
  margin: 0 -.18rem;
  height: .1rem;
  background: $content-bgColor;
}
.nearby {
  &__title {
    margin: .16rem 0 .04rem 0;
    font-size: .18rem;
    color: $content-fontcolor;
    font-weight: normal;
  }
  &__item {
    display: flex;
    padding-top: .12rem;
    &__img {
      margin-right: .16rem;
      width: .56rem;
      height: .56rem;
      border-radius: .05rem;
    }
  }
  &__content {
    flex: 1;
    padding-bottom: .12rem;
    border-bottom: 1px solid $content-bgColor;
    &__title {
      line-height: .22rem;
      font-size: .16rem;
      color: $content-fontcolor;
    }
    &__tags {
      margin-top: .08rem;
      line-height: .18rem;
      font-size: .13rem;
      color: $content-fontcolor;
    }
    &__tag {
      margin-right: .16rem;
    }
    &__highlight {
      display: inline-block;
      font-size: .1rem;
      color: #E77B20;
      background-color: #FFEAD7;
      padding: .04rem .05rem;
      border-radius: .05rem;
    }
  }
}
.docker {
  display: flex;
  box-sizing: border-box;
  position: absolute;
  padding: 0 .18rem;
  left: 0;
  bottom: 0;
  width: 100%;
  height: .49rem;
  border-top: .01rem solid $content-bgColor;
  color: $content-fontcolor;
  &__item {
    flex: 1;
    text-align: center;
    .iconfont {
      margin: .07rem 0 .02rem 0;
      font-size: .2rem;
    }
    &--active {
      color: #1fa4fc;
    }
  }
  &__title {
    font-size: .2rem;
    transform: scale(.5, .5);
    transform-origin: center top;
  }
}
</style>
