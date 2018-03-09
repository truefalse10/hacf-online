<template>
  <div id="app">
    <v-header />
    <home/>
    <section 
      key="about" 
      id="about">
      <h2>About</h2>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis pariatur voluptas explicabo nisi fugiat voluptates dignissimos maxime facere in voluptatibus! Harum ducimus dolorem nisi molestias beatae eveniet optio incidunt ipsam!</p>
    </section>
    <section
    id="wackersberg">
      <div class="image-text">
        <div>
          <img 
            src="img/haus.jpg"
            alt="wackersberg">
        </div>
        <div>
          <h2>Wackersberg</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis pariatur voluptas explicabo nisi fugiat voluptates dignissimos maxime facere in voluptatibus! Harum ducimus dolorem nisi molestias beatae eveniet optio incidunt ipsam!</p>
        </div>
      </div>
    </section>
    <section
    id="anreise">
      <div class="image-text">
        <div>
          <h2>Anreise</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis pariatur voluptas explicabo nisi fugiat voluptates dignissimos maxime facere in voluptatibus! Harum ducimus dolorem nisi molestias beatae eveniet optio incidunt ipsam!</p>
        </div>
        <div>
          <img 
            src="img/wiese.jpg"
            alt="wackersberg">
        </div>
      </div>
    </section>
    <section>
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d180386.28604841878!2d11.445167564753861!3d47.759151740700354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479d942d4640586b%3A0xfa5a04962e533cbc!2sBurger+19%2C+83646+Wackersberg!5e0!3m2!1sde!2sde!4v1520618567060"
        width="100%" 
        height="300" 
        frameborder="0" 
        style="border:0"
        allowfullscreen/>
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
  padding: 25px 0;
  max-width: 1200px;
  margin: 0 auto 60px;
  @media screen and (min-width: $breakpoint) {
    padding: 25px;
  }
  &.grey {
    background-color: #f0f0f0;
  }
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
