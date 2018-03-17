<template>
  <div class="gallery-section">
    <h2>Fotos</h2>
    <p>Dies ist eine Sammlung von Bildern, die die beiden Paare in ihren glücklichen, lustigen, traurigen, stolzen aber vielleicht auch etwas peinlichen Momenten zeigt. Jeder Besucher ist dazu aufgefordert Schnappschüsse, die sich vielleicht noch auf einer alten Kamera, Smartphone oder in einem Poesiealbum finden lassen hier hochzuladen. Einfach Datei auswählen und den Upload Button klicken!</p>
    <form @submit.prevent="upload">
      <div class="upload">
        <label for="profile_pic">Bild zum Hochladen auswählen</label>
        <input 
          type="file"
          id="profile_pic"
          name="profile_pic"
          ref="input"
          @change="change"
          accept=".jpg, .jpeg, .png">
        <button
          class="button-upload"
          :class="{ success: uploadState === 'success', disabled: !showUpload}"
          type="submit" 
          :disabled="uploadState === 'success' || uploadState === 'pending' || !showUpload"
        >Upload! <span v-if="uploadState === 'success'">✔</span>
          <img
            v-else-if="uploadState === 'pending'" 
            src="../assets/ajax-loader.gif">
        </button>
      </div>
    </form>
    <gallery/>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Gallery from '@/components/Gallery';

export default {
  components: {
    Gallery,
  },
  data() {
    return {
      uploadedFile: null,
      showUpload: false,
    };
  },
  computed: mapState(['uploadState']),
  methods: {
    upload() {
      if (this.uploadedFile)
        this.$store.dispatch('uploadImage', this.uploadedFile).then(() => {
          this.$store.dispatch('fetchImages');
        });
    },
    change(event) {
      this.$store.commit('setUploadState', 'initial');
      if (event.target.files.length) {
        this.showUpload = true;
        this.uploadedFile = event.target.files[0];
      } else {
        this.showUpload = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.gallery-section {
  max-width: 1200px;
  margin: 0 auto;
}
.upload {
  margin-bottom: 30px;
}
.button-upload {
  &.disabled {
    background-color: grey;
  }
  &.success {
    background-color: #37ab36;
  }
}
</style>
