# UserStore API Wrapper for Node.js

[UserStore](https://www.userstore.io) ia a hosted user authentication and management service. Easy to integrate so you can start registering and managing users in less than an hour. 

## Installation

`npm install userstore`

## Documentation

Documentation is available at [https://www.userstore.io/docs](https://www.userstore.io/docs).

## API Overview

Every resource is accessed via your `userstore` instance:

```js
var userstore = require('userstore')(' your secret key ');
// userstore.{ RESOURCE_NAME }.{ METHOD_NAME }
```

Every resource method accepts a callback as the last argument:

```js
userstore.users.create(
  { email: 'user@example.com', password: 'hG9skZ12#1p6' },
  function(err, user) {
  }
);
```

### Available resources and methods

*Where you see `data` or `options` it is a plain JavaScript object, e.g. `{ email: 'user@example.com' }`*

##### auth
  * `signIn(signInId, password, callback)`
  * `signOut(id, callback)`
  * `forgotPassword(email, options, callback)`
  * `resetPassword(code, password, callback)`
  * `verify(code, callback)`
  * `confirm(id, password, callback)`

##### users
  * `create(options, data, callback)`
  * `get(id, options, callback)`
  * `list(options, callback)`
  * `update(options, data, callback)`
  * `delete(id, callback)`

##### tokens
  * `get(id, callback)`
