import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({

  invitesStatus: computed('invites', function(){

    let invites = this.get('invites').get('content');
    let statusCounters = this.getStatusCounters(invites);
    return statusCounters;

  }),

  getStatusCounters:function(invites){

    let status = {"invited":0, "reinvited":0, "answered":0, "canceled":0};
    let invitesSize = invites.length

    for(var index=0; index < invitesSize; index++){
      var currentRecord = invites.pop();
      status[currentRecord.__data.status]++;
    }

    var statusCounters = [
      {status:"Invited", counter:status["invited"]},
      {status:"Reinvited", counter:status["reinvited"]},
      {status:"Answered", counter:status["answered"]},
      {status:"Canceled", counter:status["canceled"]}
    ]

    return statusCounters;

  }

});
