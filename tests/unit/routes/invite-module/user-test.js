import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | invite-module/user', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:invite-module/user');
    assert.ok(route);
  });
});
