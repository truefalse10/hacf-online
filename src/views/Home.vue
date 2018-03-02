<template>
  <div class="home">
    <h1>
      🎊 Hanna + Andi
      <br>
      Cora + Felix 🎉
    </h1>
    <p class="date">04.08.2018 <a href="#">@Wackersberg</a></p>
    <!-- <img
      v-for="image in images"
      :key="image"
      :src="image"
      style="width: 100%;"
    > -->
    <gallery :images="images"/>
    <button>Upload Image</button>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Gallery from '@/components/Gallery';

export default {
  name: 'Home',
  components: {
    Gallery,
  },
  computed: mapState(['images']),
  mounted() {
    this.$store.dispatch('fetchImages');
  },
};
</script>

<style lang="scss" scoped>
h1 {
  text-transform: uppercase;
  margin-bottom: 0;
}
.date {
  margin-top: 0;
}
</style>
