'use strict';

var Request = require('./request');
var Auth = require('./resources/auth');
var Tokens = require('./resources/tokens');
var Users = require('./resources/users');
var exec = require('child_process').exec;

var CONFIG = {
  PACKAGE_VERSION: require('../package.json').version
}

function userStore(secretKey, version) {

  var request = new Request(secretKey);

  this.tokens = new Tokens(request);
  this.users = new Users(request);
  this.auth = new Auth(request);

  this.version = CONFIG.PACKAGE_VERSION;

  this._addResource = function(name, resource) {
    this[name] = new resource(request);
  }
}

module.exports = userStore;