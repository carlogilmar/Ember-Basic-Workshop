import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('invite-module', function() {
    this.route('find-users');
    this.route('show-invites');
    this.route('show-user', {path:'user/:user'});
    this.route('new-user');
  });
  this.route('statics-module', function() {
    this.route('info');
    this.route('chart');
  });
});

export default Router;
