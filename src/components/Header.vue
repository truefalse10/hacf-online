<template>
  <div class="header">
    <div 
      class="left" 
      @click="$store.dispatch('fetchImages')">HACF.online</div>
    <div class="right">
      <span v-scroll-to="'#wackersberg'">Wackersberg</span> |
      <span v-scroll-to="'#gallery'">Fotos</span> |
      <span v-scroll-to="'#tombola'">Tombola</span> |
      <span v-scroll-to="'#anreise'">Anreise</span> |
      <span v-scroll-to="'#parken'">Parken & Übernachten</span>
    </div>
  </div>	
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import '../variables.scss';

.header {
  padding: 10px 30px;
  background-color: $header-color;
  color: #fff;
  position: absolute;
  top: 0;
  width: 100%;
  .left {
    display: none;
  }
  @media screen and (min-width: $breakpoint) {
    display: flex;
    justify-content: space-between;
    .left {
      display: block;
    }
  }
  span {
    font-weight: bold;
    color: $color-2;
  }
  .right {
    color: $color-2;
  }
}
</style>
