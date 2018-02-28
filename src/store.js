import Vue from 'vue';
import Vuex from 'vuex';
import AWS from 'aws-sdk';
import config from '../config';

const s3 = new AWS.S3({
  params: {
    Bucket: 'hacfonline',
  },
  accessKeyId: config.key,
  secretAccessKey: config.secret,
  region: 'eu-central-1',
});

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    images: null,
  },
  mutations: {
    fetchImagesSuccess: (state, images) => (state = images),
  },
  actions: {
    fetchImages({ commit }) {
      console.log(s3); // eslint-disable-line
      s3.listObjects((err, data) => {
        if (err) {
          console.log(err); // eslint-disable-line
        } else {
          console.log(data); // eslint-disable-line
          commit(
            'fetchImagesSuccess',
            data.Contents.map(({ Key }) => encodeURIComponent(Key)),
          );
        }
      });
    },
  },
});
