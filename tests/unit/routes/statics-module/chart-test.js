import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | statics-module/chart', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:statics-module/chart');
    assert.ok(route);
  });
});
