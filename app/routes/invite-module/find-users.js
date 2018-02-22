import Route from '@ember/routing/route';

export default Route.extend({

  model(){
    return this.get('store').findAll('user');
  },

  actions:{

    findUsername:function(){
      let username = this.get('controller').get('username');
      this.get('controller').set('username', '');
      this.transitionTo('invite-module.user', username);
    }

  }

});
