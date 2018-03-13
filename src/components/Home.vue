<template>
  <div class="home">
    <h1>
      🎊 Hanna + Andi
      <br>
      Cora + Felix 🎉
    </h1>
    <p class="date">04.08.2018 <a href="#wackersberg">@Wackersberg</a></p>
    <div class="text">
      <p>Servus beinand,
      wir wollen unsere Hochzeit mit euch feiern!
      </p>
      <p>Wo: Burgernstr.24 (bei google maps Burgern 19)</p>
      <p>Wann: 15 Uhr freie Trauung</p>
    </div>
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
  background-image: url('/img/hero.jpg');
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
  .text {
    font-size: 20px;
    color: black;
    background: rgba(255, 255, 255, 0.8);
    width: 70%;
    margin: 0 auto;
    border-radius: 5px;
    padding: 20px;
  }
}
</style>
