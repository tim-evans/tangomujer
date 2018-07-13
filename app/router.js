import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('channel', { path: '/channels/:slug' });
  this.route('post', { path: '*' });
});

export default Router;
