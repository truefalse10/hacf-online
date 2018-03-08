<template>
  <div id="app">
    <v-header />
    <home/>
    <section id="about">
      <h2>About</h2>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis pariatur voluptas explicabo nisi fugiat voluptates dignissimos maxime facere in voluptatibus! Harum ducimus dolorem nisi molestias beatae eveniet optio incidunt ipsam!</p>
    </section>
    <section id="wackersberg">
      <div class="image-text">
        <div>
          <img 
            src="img/wackersberg.jpg"
            alt="wackersberg">
        </div>
        <div>
          <h2>Wackersberg</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis pariatur voluptas explicabo nisi fugiat voluptates dignissimos maxime facere in voluptatibus! Harum ducimus dolorem nisi molestias beatae eveniet optio incidunt ipsam!</p>
        </div>
      </div>
    </section>
    <section id="anreise">
      <div class="image-text">
        <div>
          <h2>Anreise</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis pariatur voluptas explicabo nisi fugiat voluptates dignissimos maxime facere in voluptatibus! Harum ducimus dolorem nisi molestias beatae eveniet optio incidunt ipsam!</p>
        </div>
        <div>
          <img 
            src="img/wackersberg.jpg"
            alt="wackersberg">
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import VHeader from '@/components/Header';
import Home from '@/components/Home';

export default {
  components: {
    VHeader,
    Home,
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
$header-color: #272727;
$breakpoint: 415px;
* {
  box-sizing: border-box;
}
html,
body {
  margin: 0;
  background: #fff;
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
  margin: 0;
}
h2 {
  color: $color-2;
}

#nav {
  padding: 10px 30px;
  display: flex;
  justify-content: space-between;
  background-color: $header-color;
  color: #fff;
  position: absolute;
  top: 0;
  width: 100%;
}

#nav a {
  font-weight: bold;
  color: $color-2;
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
section {
  background: #fff;
  color: black;
  padding: 25px;
  max-width: 1200px;
  margin: 0 auto 60px;
}
.image-text {
  img {
    width: 100%;
  }
  @media screen and (min-width: $breakpoint) {
    display: flex;
    > div:first-child {
      margin-right: 20px;
    }
  }
}
</style>
