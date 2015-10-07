# UserStore API Wrapper for Node.js

## Installation

`npm install userstore`

## Documentation

Documentation is available at https://www.userstore.io/docs.

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

 * auth
  * `signIn(signInId, password, callback)`
  * `signOut(id, callback)`
  * `forgotPassword(email, callback)`
  * `resetPassword(code, password, callback)`
  * `verify(code, callback)`
  * `confirm(id, password, callback)`
 * users
  * `create(data, callback)`
  * `get(id, callback)`
  * `list(options, callback)`
  * `update(options, data, callback)`
  * `delete(id, callback)`
 * token
  * `get(id, callback)`

## More information

 * [REST API Version](https://www.userstore.io/docs/rest-api)
