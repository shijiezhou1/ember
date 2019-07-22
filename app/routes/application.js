import Route from '@ember/routing/route';

export default Route.extend({
    model(){
        return this.store.findAll('5c4b78f9a3fb18257abf79eb');
    },
    setupController( controller, model ){
        controller.set('okay', model);
        console.log('123',controller.get('okay'));
        // this._super( ...arguments ); 
    },
});
