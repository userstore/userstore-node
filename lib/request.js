'use strict';

var superagent = require('superagent');

var CONFIG = {
  DEFAULT_HOST: 'https://api.userstore.io',
  DEFAULT_API_VERSION: '1'
}

module.exports = function(secretKey) {

  this.get = function(path, query, callbackFn) {
    handleRestRequest(secretKey, 'get', path, query, null, callbackFn);
  }

  this.post = function(path, query, data, callbackFn) {
    handleRestRequest(secretKey, 'post', path, query, data, callbackFn);
  }

  this.delete = function(path, query, data, callbackFn) {
    handleRestRequest(secretKey, 'del', path, query, data, callbackFn);
  }

  this.update = function(path, query, data, callbackFn) {
    handleRestRequest(secretKey, 'put', path, query, data, callbackFn);
  }
}

// private

function buildRequestURL(path) {
  var url = CONFIG.DEFAULT_HOST + '/' + CONFIG.DEFAULT_API_VERSION + path;
  console.log(url);
  return url;
}

function handleRestResponse(err, res, callbackFn) {
  if (err) {
    if (err.response && err.response.body) {
      return callbackFn(err.response.body);
    }
    else {
      return callbackFn(err);
    }
  }

  if (res.body) {
    callbackFn(null, res.body);
  }
  else {
    callbackFn({error:'internal_error'});
  }
}

function handleRestRequest(secretKey, type, path, query, data, callbackFn) {
  var requestUrl = buildRequestURL(path);

  var requestType = superagent[type](requestUrl)
    .set('x-api-key', secretKey)
    .on('error', function(err) {
      console.error('UNABLE TO CONNECT TO USERSTORE API ' + err.code);
      console.error(err);
    });

  if (query) {
    requestType.query(query);
  }

  if (data) {
    if (type != 'get') {
      requestType.send(data);
    }
  }

  requestType.end(function(err, res) {
    handleRestResponse(err, res, callbackFn);
  });
}

