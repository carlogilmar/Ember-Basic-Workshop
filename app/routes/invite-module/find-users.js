import Route from '@ember/routing/route';

export default Route.extend({

  model(){
    return this.get('store').findAll('user');
  },

  actions:{

    showUser:function(user){
      this.transitionTo('invite-module.show-user', user);
    },

		inviteUser:function(user){
			let invite = this.get('store').createRecord('invite');
			invite.set("user", user.get('username'));
			invite.set("dateCreated", Date.now());
			invite.set("status", "invited");

			invite.save().then(()=>{
				alert("Invite send!");
				this.transitionTo('invite-module.show-invites');
			},
			()=>{
				alert("Error");
			});
		}

  }

});
