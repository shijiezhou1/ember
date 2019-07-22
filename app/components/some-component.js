import Component from "@ember/component";
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';

export default Component.extend({
  theme: service(),
  isClicked: false,

  switchClicked: computed('test', function() {
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
