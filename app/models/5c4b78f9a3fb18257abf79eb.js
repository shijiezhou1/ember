import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr(),
    abbreviation: DS.attr(),
    type: DS.attr(),
    created_at: DS.attr(),
    updated_at: DS.attr(),
    status: DS.attr(),
});
