'use strict';

module.exports = function(request) {

  this.signIn = function(emailOrUsername, password, callbackFn) {
    var data = {
      signin_id: emailOrUsername,
      password: password
    };

    request.post('/auth/signin', null, data, callbackFn);
  }

  this.signOut = function(id, callbackFn) {
    var data = {
      id: id
    };

    request.post('/auth/signout', null, data, callbackFn);
  }

  this.confirm = function(id, password, callbackFn) {
    var data = {
      id: id,
      password: password
    };

    request.post('/auth/confirm', null, data, callbackFn);
  }

  this.verify = function(code, callbackFn) {
    var data = {
      code: code
    };

    request.post('/auth/verify', null, data, callbackFn);
  }

  this.forgotPassword = function(email, resetPasswordUrl, callbackFn) {
    var data = {
      email: email,
      reset_password_url: resetPasswordUrl
    };

    request.post('/auth/forgot-password', null, data, callbackFn);
  }

  this.resetPassword = function(code, password, callbackFn) {
    var data = {
      code: code,
      password: password
    };

    request.post('/auth/reset-password', null, data, callbackFn);
  }
}
