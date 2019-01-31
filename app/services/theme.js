import Service from "@ember/service";
import Ember from 'ember';

export default Ember.Service.extend({

  base: 'default',
  theme: 'first',

  // the property used as a reference for styles
  name: Ember.computed('base', function() {
    const base = this.get('base');
    const theme = this.get('theme');
    return `${base}-${theme}`;
  }),

  // update things that may be using data-theme
  themeChanged: Ember.observer('base', 'theme', function() {
    this.notifyPropertyChange('name');
  }),

  // set the base theme for the application
  setBase: function(base) {
    this.set('base', Ember.isEmpty(base) ? 'default' : base);
  },

  // set theme to use within base theme
  setTheme: function(theme) {
    this.set('theme', Ember.isEmpty(theme) ? 'first' : theme);
  }

});