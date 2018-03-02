import Vue from 'vue';
import Vuex from 'vuex';
import AWS from 'aws-sdk';
import config from '../config.json';

AWS.config.update({
  accessKeyId: config.key,
  secretAccessKey: config.secret,
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
  },
  mutations: {
    fetchImagesSuccess: (state, images) => (state.images = images),
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
      console.log(commit, file); //eslint-disable-line
      const params = {
        Body: file,
        Key: file.name,
        Bucket: 'hacfonline',
      };
      s3.putObject(params, (err, data) => {
        if (err) {
          console.log(err); // eslint-disable-line
        } else {
          console.log('success', data); // eslint-disable-line
        }
      });
    },
  },
});
