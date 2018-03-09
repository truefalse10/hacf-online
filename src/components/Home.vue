<template>
  <div class="home">
    <h1>
      🎊 Hanna + Andi
      <br>
      Cora + Felix 🎉
    </h1>
    <p class="date">04.08.2018 <a href="#wackersberg">@Wackersberg</a></p>
  </div>
</template>

<script>
import Gallery from '@/components/Gallery';

export default {
  name: 'Home',
  components: {
    Gallery,
  },
  mounted() {
    this.$store.dispatch('fetchImages');
  },
};
</script>

<style lang="scss" scoped>
.home {
  height: 100vh;
  padding-top: 80px;
  background-image: url('../assets/dancing.jpg');
  background-size: cover;
  background-position: top center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  h1 {
    text-transform: uppercase;
  }
  .date {
    margin-top: 0;
  }
}
</style>
