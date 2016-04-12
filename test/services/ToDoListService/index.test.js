'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('ToDoListService service', () => {
  it('registered the ToDoListServices service', () => {
    assert.ok(app.service('ToDoListServices'));
  });
});
