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
import 'swiper/dist/css/swiper.css';
import { swiper, swiperSlide } from 'vue-awesome-swiper';

export default {
  components: {
    swiper,
    swiperSlide,
  },
  props: {
    images: {
      type: Array,
      default: () => [],
    },
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
  },
};
</script>

<style lang="scss">
.swiper-container {
  width: 100%;
  @media screen and (min-width: 475px) {
    width: 60%;
  }
}
.slide {
  padding: 15px;
  width: 100%;
  background: white;
}
</style>
