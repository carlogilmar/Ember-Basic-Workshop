export default function() {

  this.get('/invites');
  this.post('/invites');

  this.get('/users');
  this.post('/users');
  this.get('/users/:id');

}
