import Component from "@ember/component";
import Ember from "ember";

export default Component.extend({
  theme: Ember.inject.service(),

  didReceiveAttrs() {
    this._super(...arguments);

    // subscribe to the theme changes event
    // this.get("theme").onThemeChanged(theme => {
    //   // your code to handle theme changes:
    //   if (theme === "light") {
    //     this.set("chartColor", "black");
    //   } else {
    //     this.set("chartColor", "white");
    //   }
    // });
  },

  // Its important to unsubscribe to the event when your component will be destroyed
  willDestroyElement() {
    this.get("theme").offThemeChanged();
    this._super(...arguments);
  },

  actions: {
    switchcolor() {
    //   console.log(this.get("theme"));
      if(this.get('theme').name === "first"){
          this.get('theme').setTheme('second');
      }else{
          this.get('theme').setTheme('first');
      }
    }
  }
});
