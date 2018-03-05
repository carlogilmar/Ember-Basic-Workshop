import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({

  chartModel: computed('invites', function(){

    let invites = this.get('invites').get('content');
    let statusCounters = this.getStatusCounters(invites);

    /*
     *  Model for Chart.js
     *
     */
    let model = {
      labels: ["Invited", "Reinvited", "Answered", "Canceled"],
      datasets: [
        {
          label: "Invites",
          data: statusCounters,
          backgroundColor: [
            'rgba(54, 162, 235, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(255, 99, 132, 0.2)'
          ]
        }
      ]
    };
    return model;
  }),

  getStatusCounters:function(invites){

    let status = {"invited":0, "reinvited":0, "answered":0, "canceled":0};
    let invitesSize = invites.length

      debugger;

    for(var index=0; index < invitesSize; index++){
      var currentRecord = invites.get(index);
      status[currentRecord.__data.status]++;
    }

    var statusCounters = [
      status["invited"],
      status["reinvited"],
      status["answered"],
      status["canceled"], 0
    ]

    return statusCounters;

  }

});
