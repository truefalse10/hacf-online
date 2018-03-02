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
        <label for="profile_pic">Choose file to upload</label>
        <input 
          type="file"
          id="profile_pic"
          name="profile_pic"
          @change="uploadedFile = $event.target.files[0]"
          accept=".jpg, .jpeg, .png">
      </div>
      <div>
        <button>Submit</button>
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
    };
  },
  computed: mapState(['images']),
  mounted() {
    this.$store.dispatch('fetchImages');
  },
  methods: {
    upload() {
      if (this.uploadedFile)
        this.$store.dispatch('uploadImage', this.uploadedFile);
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
</style>
