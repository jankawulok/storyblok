import { integrationPlugin } from '@vue-storefront/core'
import Vue from 'vue'
import StoryblokVue from 'storyblok-vue';

Vue.use(StoryblokVue);

export default integrationPlugin(({ integration }) => {
  integration.configure('sb', { ...<%= serialize(options) %> })
})
