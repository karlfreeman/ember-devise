App = Ember.Application.create({
  LOG_TRANSITIONS: true
});

App.Router.map(function() {
  this.resource('home');
});

App.Router.reopen({
  location: 'history'
});