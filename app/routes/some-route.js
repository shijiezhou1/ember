import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  theme: service(),

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
