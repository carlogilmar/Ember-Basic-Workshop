import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | statics-module/info', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:statics-module/info');
    assert.ok(route);
  });
});
