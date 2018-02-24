import Component from '@ember/component';
import Ember from 'ember';

export default Component.extend({

  chartModel: Ember.computed('invites', function(){

    let invites = this.get('invites').get('content');
    let statusCounters = this.getStatusCountes(invites);

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

  getStatusCounts:function(invites){

    let status = {"invited":0, "reinvited":0, "answered":0, "canceled":0};
    let invitesSize = invites.length

    for(var index=0; index < invitesSize; index++){
      var currentRecord = invites.pop();
      status[currentRecord.__data.type]++;
    }

    var model = [
      status["invited"],
      status["reinvited"],
      status["answered"],
      status["canceled"], 0
    ]

    return results;

  }

});
