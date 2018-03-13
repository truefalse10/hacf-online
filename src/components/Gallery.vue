<template>
  <div class="gallery">
    <swiper 
      ref="mySwiper"
      :options="swiperOption" 
    >
      <!-- slides -->
      <swiper-slide 
        v-for="slide in images"
        :key="slide">
        <img 
          class="slide" 
          :src="slide">
      </swiper-slide>
      <!-- Optional controls -->
      <!-- <div 
        class="swiper-button-prev"
        slot="button-prev"/>
      <div 
        class="swiper-button-next"
        slot="button-next"/> -->
    </swiper>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import 'swiper/dist/css/swiper.css';
import { swiper, swiperSlide } from 'vue-awesome-swiper';

export default {
  components: {
    swiper,
    swiperSlide,
  },
  data() {
    return {
      swiperOption: {
        // effect: 'fade',
        loop: true,
        autoplay: {
          delay: 4000,
          disableOnInteraction: false,
        },
        // navigation: {
        //   nextEl: '.swiper-button-next',
        //   prevEl: '.swiper-button-prev',
        // },
      },
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    },
    ...mapState(['images', 'uploadState']),
  },
};
</script>

<style lang="scss">
.swiper-container {
  width: 100%;
  height: 100vh;
  @media screen and (min-width: 475px) {
    min-width: 60%;
    height: 500px;
  }
}
.slide {
  box-sizing: border-box;
  width: 100%;
  @media screen and (min-width: 475px) {
    width: auto;
    height: 100%;
  }
}
</style>
