'use strict';

module.exports = function(request) {

  this.get = function(id, callbackFn) {
    request.get('/tokens/' + id, null, callbackFn)
  }
  
}