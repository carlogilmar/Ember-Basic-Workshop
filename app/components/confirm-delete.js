import Component from '@ember/component';

export default Component.extend({
  actions:{
    confirmDelete(user){
      this.sendAction('deleteUserComponet',user);
    }
  }
});
