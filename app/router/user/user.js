'use strict';
module.exports = app => {
  const auth = app.middleware.auth({attr:'this is auth'});
  app.router.resources('users', '/v1/users',app.controller.users);
  app.router.get('/v1/users/getUser/:id',auth,app.controller.users.getUser);
};
