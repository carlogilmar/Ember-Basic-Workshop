import Route from '@ember/routing/route';

export default Route.extend({

  model(){
    return this.get('store').findAll('user');
  },

  actions:{

    showUser:function(user){
      this.transitionTo('invite-module.show-user', user);
    }

  }

});
