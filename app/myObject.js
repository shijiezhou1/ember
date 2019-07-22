import EmberObject from '@ember/object';

export default function() {
  const Light = EmberObject.extend({
    init() {
      console.log("the isObkect propery id defaulted to " + this.get("isOn"));
    },
    isOn: false
  });
  Light.reopen({
    color: "yellow"
  });
  Light.reopenClass({
    wattage: 80
  });
  const bulb = Light.create();

  console.log(bulb.get("color"));
  console.log(bulb.wattage);

}
