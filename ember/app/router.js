import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('lines');
  this.route('trains');
  this.route('search');
  // this.route('trip');
  this.route('trip');
});

export default Router;
