<template>
  <div id="app">
    <v-header />
    <router-view/>
  </div>
</template>

<script>
import VHeader from '@/components/Header';

export default {
  components: {
    VHeader,
  },
};
</script>


<style lang="scss">
$color-font: #fff;
$color-primary: #b5b99a;
$color-2: #c4526f;
$color-3: #4b3120;
$color-4: #26281b;
$color-5: #6c5138;
* {
  box-sizing: border-box;
}
html,
body {
  margin: 0;
  height: 100%;
  background-image: url('./assets/dancing.jpg');
  background-size: cover;
  background-position: center center;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $color-font;
}

h1,
h2,
h3,
h4 {
  font-family: 'Dosis', sans-serif;
}

#nav {
  padding: 10px 30px;
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  color: #000;
}

#nav a {
  font-weight: bold;
  color: $color-3;
}

#nav a.router-link-exact-active {
  color: $color-2;
}
a {
  color: $color-2;
}
button {
  color: white;
  background: $color-2;
}
</style>
