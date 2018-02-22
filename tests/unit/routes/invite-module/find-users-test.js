import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | invite-module/find-users', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:invite-module/find-users');
    assert.ok(route);
  });
});
