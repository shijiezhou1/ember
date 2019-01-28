import DS from 'ember-data';

export default DS.RESTAdapter.extend({
    // SPECIFY THE URL OF YOUR BACK END API
    host: 'https://api.jsonbin.io/b',
    pathForType: function(type) {
        var camelized = Ember.String.camelize(type);
        return camelized; //Ember.String.pluralize(camelized);
    },
    // UPDATE ADAPTER
    buildURL: function(record, suffix) {
        console.log('Query Url: ',      this._super(...arguments));
        return this._super(record,suffix) + '/latest';
    },
    init(){
        this._super(...arguments);
        this.set('headers', {
            'secret-key': '$2a$10$C9myd8H8imc2n/IfMm9hreRO.fr7O3UM4K9fQvz6Zbf1JctfeTBI2',
        });
    }
   
});