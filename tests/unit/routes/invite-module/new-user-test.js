import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | invite-module/new-user', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:invite-module/new-user');
    assert.ok(route);
  });
});
