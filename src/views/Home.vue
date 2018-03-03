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
    <form @submit.prevent="upload">
      <div>
        <label for="profile_pic">Bild zum Hochladen auswählen</label>
        <input 
          type="file"
          id="profile_pic"
          name="profile_pic"
          ref="input"
          @change="change"
          accept=".jpg, .jpeg, .png">
      </div>
      <div>
        <button
          class="button-upload"
          :class="{ success: uploadState === 'success' }"
          type="submit" 
          v-if="showUpload"
          :disabled="uploadState === 'success' || uploadState === 'pending'"
        >Hochladen! <span v-if="uploadState === 'success'">✔</span>
          <img
            v-else-if="uploadState === 'pending'" 
            src="../assets/ajax-loader.gif">
        </button>
      </div>
    </form>
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
  data() {
    return {
      uploadedFile: null,
      showUpload: false,
    };
  },
  computed: mapState(['images', 'uploadState']),
  mounted() {
    this.$store.dispatch('fetchImages');
  },
  methods: {
    upload() {
      if (this.uploadedFile)
        this.$store.dispatch('uploadImage', this.uploadedFile);
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
h1 {
  text-transform: uppercase;
  margin-bottom: 0;
}
.date {
  margin-top: 0;
}
.button-upload {
  &.success {
    background-color: #37ab36;
  }
}
</style>
