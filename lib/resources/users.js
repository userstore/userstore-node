'use strict';

module.exports = function(request) {

  this.get = function(id, options, callbackFn) {
    request.get('/users/' + id, options, callbackFn)
  }

  this.list = function(options, callbackFn) {
    request.get('/users', options, callbackFn);
  }

  this.create = function(options, data, callbackFn) {
    request.post('/users', options, data, callbackFn);
  }

  this.update = function(id, options, data, callbackFn) {
    request.update('/users/' + id, options, data, callbackFn);
  }

  this.delete = function(id, callbackFn) {
    request.delete('/users/' + id, null, null, callbackFn);
  }

}