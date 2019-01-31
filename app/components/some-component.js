import Component from "@ember/component";
import Ember from "ember";

export default Component.extend({
  theme: Ember.inject.service(),
  isClicked: false,

  switchClicked: Ember.computed('test', function() {
    return false;
  }),

  applyTheme(updateTheme){
    this.get('theme').setTheme(updateTheme);
  },
  
  actions: {
    switchcolor() {
      if(this.isClicked){
          this.applyTheme('second');
          this.isClicked = false;
      }else{
          this.applyTheme('first');
          this.isClicked = true;
      }
    }
  }
});
