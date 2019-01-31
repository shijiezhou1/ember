import Route from '@ember/routing/route';
import Ember from 'ember';

export default Ember.Route.extend({
  theme: Ember.inject.service(),
  
  // set theme to "second" when hitting route
  beforeModel: function() {
    this._super(...arguments);
    this.get('theme').setTheme('second');
  },
  
  actions: {
    // set theme to "first" when leaving route
    willTransition: function() {
      this.get('theme').setTheme('first');
      this._super(...arguments);
    }
  }
});