export default function() {

  this.get('/invites');
  this.post('/invites');
  this.put('/invites/:id');

  this.get('/users');
  this.post('/users');
  this.get('/users/:id');

}
