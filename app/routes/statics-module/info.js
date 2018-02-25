import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
  model(){
    return RSVP.hash({
      invites:this.get('store').findAll('invite', { reload: true })
    });
  }
});
