'use strict';
const ToDoListService = require('./ToDoListService');
const authentication = require('./authentication');
const user = require('./user');

module.exports = function() {
  const app = this;


  app.configure(authentication);
  app.configure(user);
  app.configure(ToDoListService);
};
