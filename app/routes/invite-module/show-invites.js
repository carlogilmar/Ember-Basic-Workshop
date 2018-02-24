import Route from '@ember/routing/route';

export default Route.extend({

  model(){
    return this.get('store').findAll('invite');
  },

  actions:{
    reInvite:function(invite){
      let currentInvite = invite
      currentInvite.set('status', 'reinvited');
      currentInvite.save().then( ()=>{
        alert("Invited mark as REINVITED!!");
      },
        ()=>{
          alert("Error!");
        });
    },
    answerInvite:function(invite){
      let currentInvite = invite
      currentInvite.set('status', 'answered');
      currentInvite.save().then( ()=>{
        alert("Invited mark as ANSWERED!!");
      },
        ()=>{
          alert("Error!");
        });
    },
    cancelInvite:function(invite){
      let currentInvite = invite
      currentInvite.set('status', 'canceled');
      currentInvite.save().then( ()=>{
        alert("Invited mark as CANCELED!!");
      },
        ()=>{
          alert("Error!");
        });
    }
  }
});
