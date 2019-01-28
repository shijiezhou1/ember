import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Model | 5c4b78f9a3fb18257abf79eb', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let store = this.owner.lookup('service:store');
    let model = store.createRecord('5c4b78f9a3fb18257abf79eb', {});
    assert.ok(model);
  });
});
