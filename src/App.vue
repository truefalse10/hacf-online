<template>
  <div id="app">
    <v-header />
    <home/>
    <!-- <v-section 
    id="about">
      <h2>Hochzeit</h2>
      <p>Servus beinand,
      wir wollen unsere Hochzeit mit euch feiern!
      </p>
      <p>Wo: Burgernstr.24 (bei google maps Burgern 19)</p>
      <p>Wann: 15 Uhr freie Trauung</p>
    </v-section> -->
    <v-section
    id="wackersberg">
      <div class="image-text">
        <div class="image">
          <img 
            src="img/haus.jpg"
            alt="wackersberg">
        </div>
        <div>
          <h2>Wackersberg</h2>
          <p>
            Wackersberg, wer es noch nicht kennt, ist für uns unser zweites Zuhause. Seit mehr als 100 Jahren fahren alle Mitglieder der Endres Familie regelmäßig
            in dieses Ferienhaus am Rande von Bad Tölz. Die Trauung der beiden Paare soll in dem mehr als 30 Tagwerk großen naturbelassenen Garten stattfinden,
            die Feier auf dem Feld des benachbarten Bauerns.
          </p>
        </div>
      </div>
    </v-section>
    <v-section 
      class="grey"
      id="gallery">
      <gallery-section/>
    </v-section>
    <v-section
    id="tombola">
      <div class="image-text">
        <div>
          <h2>Tombola</h2>
          <p>Um an unserer großartigen Tombola mit wahnsinns Preisen teilnehmen zu können, ist es unbedingt notwendig die Antwortkarte ausgefüllt und zeitnah zurückzuschicken. Unter allen Einsendern verlosen wir den Hauptgewinn.</p>
          <p>Für weitere Frangen/Beiträge/Geschenke bitte an die Trauzeugen wenden <a href="mailto:wackersberg.hochzeit@gmail.com">wackersberg.hochzeit@gmail.com</a></p>
          <p>Andi: <em>"am besten Kies, Scheine, Schotter, Money und Moos!"</em></p>
        </div>
        <div class="image">
          <img 
            src="img/tombola.jpg"
            alt="tombola">
        </div>
      </div>
    </v-section>
    <v-section
    id="anreise">
      <div class="image-text">
        <div class="image">
          <img 
            src="img/anreise.jpg"
            alt="wackersberg">
        </div>
        <div>
          <h2>Anreise</h2>
          Die Adresse ist Burgernstraße 24, 83646 Wackersberg. Auf Google Maps wird die Markierung leider nicht richtig angezeigt, dort lieber Burger 19 eingeben.
          <ul class="anreise">
            <li><strong>Auto:</strong> aus München kommend über die A95 Richtung Garmisch. Ausfahrt Wolfratshausen über Königsdorf nach Bad Tölz</li>
            <li><strong>Zug:</strong> mit der BOB von München Hbf nach Bad Tölz. Von dort aus am besten mit dem Taxi oder zu Fuß (30min)</li>
            <li><strong>Schlauchboot:</strong> von München nach Bad Tölz, für Tips bitte an Julia Endres wenden</li>
          </ul>
        </div>
      </div>
    </v-section>
    <v-section
      key="parken"
      id="anreise">
      <div class="image-text">
        <div>
          <h2>Parken & Übernachten</h2>
          <div style="text-align: left">
            <h3>Parken</h3>
            <p>
              ein öffentlicher Parkplatz befindet sich nur wenige Gehmitnuten von der Feier entfernt (siehe Bild)
            </p>
            <h3>Übernachten</h3>
            <ul>
              <li>Jugenherberge Bad Tölz, am Sportpark 4</li>
              <li>Zeltmöglichkeit nähe Burgernstr.24</li>
              <li>diverse Hotels in Umgebung Wackersberg/Bad Tölz</li>
              <li>bei weiteren Fragen gerne an Birgit wenden (b.mau-endres@t-online.de)</li>
            </ul>
          </div>
        </div>
        <div class="image">
          <img 
            src="img/parkplatz.jpg"
            alt="wackersberg">
        </div>
      </div>
    </v-section>
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
import VSection from '@/components/Section';
import Home from '@/components/Home';
import GallerySection from '@/components/GallerySection';

export default {
  components: {
    VHeader,
    Home,
    VSection,
    GallerySection,
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

h1 {
  font-size: 26px;
  margin: 0;
}
h1,
h2,
h3,
h4 {
  font-family: 'Dosis', sans-serif;
}
h2 {
  color: $color-2;
  text-transform: uppercase;
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
  transition: all 300ms ease;
}
section {
  background: #fff;
  color: black;
  padding: 25px 0 100px;
  margin: 0 auto;
  transition: all 0.5s ease;
  @media screen and (min-width: $breakpoint) {
    padding: 25px 25px 100px;
  }
  &.grey {
    background-color: #f0f0f0;
  }
}
.image-text {
  max-width: 1200px;
  margin: 0 auto;
  align-items: center;
  > div {
    width: 50%;
  }
  img {
    width: 100%;
    max-width: 350px;
  }
  @media screen and (min-width: $breakpoint) {
    display: flex;
  }
}
ul {
  &.anreise {
    list-style: none;
    text-align: left;
    li {
      margin-bottom: 10px;
    }
  }
}
</style>
