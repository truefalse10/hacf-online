<template>
  <div class="home">
    <h1>
      🎊 Hanna + Andi
      <br>
      Cora + Felix 🎉
    </h1>
    <div class="text">
      <p>Servus beinand,
      wir wollen unsere Hochzeit mit euch feiern!
      </p>
      <p>Wo: <a href="#anreise">Burgernstr. 24, Wackersberg</a></p>
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
  padding-top: 100px;
  background-image: url('/img/hero.jpg');
  background-size: cover;
  background-position: top center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  h1 {
    text-transform: uppercase;
    font-size: 50px;
    margin-bottom: 20px;
  }
  .text {
    font-size: 24px;
    color: black;
    background: rgba(255, 255, 255, 0.8);
    width: 70%;
    margin: 0 auto;
    border-radius: 5px;
    padding: 20px;
  }
}
</style>
