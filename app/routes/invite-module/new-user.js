import Route from '@ember/routing/route';

export default Route.extend({

  model(){
    return this.get('store').createRecord('user');
  },
  actions:{
    createUser:function(){
      let user = this.currentModel
      let userPromise = user.save();
      userPromise.then( () => {
          alert("User Saved");
        }, () => {
          alert("Error");
        }
      );
      this.transitionTo('invite-module.find-users');
    }
  }

});
