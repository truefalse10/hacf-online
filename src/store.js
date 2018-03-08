import Vue from 'vue';
import Vuex from 'vuex';
import AWS from 'aws-sdk';

AWS.config.update({
  accessKeyId: process.env.VUE_APP_AWS_KEY,
  secretAccessKey: process.env.VUE_APP_AWS_SECRET,
  region: 'eu-central-1',
});

const s3 = new AWS.S3({
  params: {
    Bucket: 'hacfonline',
  },
});

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    images: null,
    uploadState: false,
  },
  mutations: {
    fetchImagesSuccess: (state, images) => (state.images = images),
    // uploadStates: pending | success | failed | initial
    setUploadState: (state, uploadState) => (state.uploadState = uploadState),
  },
  actions: {
    fetchImages({ commit }) {
      s3.listObjects((err, data) => {
        if (err) {
          console.log(err); // eslint-disable-line
        } else {
          commit(
            'fetchImagesSuccess',
            // data.Contents,
            data.Contents.map(
              ({ Key }) =>
                `https://hacfonline.s3.eu-central-1.amazonaws.com/${Key}`,
            ),
          );
        }
      });
    },
    uploadImage({ commit }, file) {
      commit('setUploadState', 'pending');
      console.log(commit, file); //eslint-disable-line
      const params = {
        Body: file,
        Key: file.name,
        Bucket: 'hacfonline',
      };
      s3.putObject(params, err => {
        if (err) {
          console.log(err); // eslint-disable-line
          commit('setUploadState', 'failed');
        } else {
          commit('setUploadState', 'success');
        }
      });
    },
  },
});
