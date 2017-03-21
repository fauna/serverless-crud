'use strict';

const todosCreate = require('./todos-create.js');
const todosReadAll = require('./todos-read-all.js');
const todosToggleAll = require('./todos-toggle-all.js');
const todosReadOne = require('./todos-read-one.js');
const todosUpdate = require('./todos-update.js');
const todosDelete = require('./todos-delete.js');
const todosClearCompleted = require('./todos-clear.js');

module.exports.create = (event, context, callback) => {
  todosCreate(event, (error, result) => {
    const response = {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin" : "*",
        "Access-Control-Allow-Methods" : "OPTIONS,GET,PUT,POST,DELETE",
        'Access-Control-Allow-Credentials': true
      },
      body: JSON.stringify(result),
    };

    context.succeed(response);
  });
};

module.exports.readAll = (event, context, callback) => {
  todosReadAll(event, (error, result) => {
    const response = {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin" : "*",
        "Access-Control-Allow-Methods" : "OPTIONS,GET,PUT,POST,DELETE",
        'Access-Control-Allow-Credentials': true
      },
      body: JSON.stringify(result),
    };

    context.succeed(response);
  });
};

module.exports.toggleAll = (event, context, callback) => {
  todosToggleAll(event, (error, result) => {
    const response = {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin" : "*",
        "Access-Control-Allow-Methods" : "OPTIONS,GET,PUT,POST,DELETE",
        'Access-Control-Allow-Credentials': true
      },
      body: JSON.stringify(result),
    };

    context.succeed(response);
  });
};

module.exports.clear = (event, context, callback) => {
  todosClearCompleted(event, (error, result) => {
    const response = {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin" : "*",
        "Access-Control-Allow-Methods" : "OPTIONS,GET,PUT,POST,DELETE",
        'Access-Control-Allow-Credentials': true
      },
      body: JSON.stringify(result),
    };

    context.succeed(response);
  });
};

module.exports.readOne = (event, context, callback) => {
  todosReadOne(event, (error, result) => {
    const response = {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin" : "*",
        "Access-Control-Allow-Methods" : "OPTIONS,GET,PUT,POST,DELETE",
        'Access-Control-Allow-Credentials': true
      },
      body: JSON.stringify(result),
    };

    context.succeed(response);
  });
};

module.exports.update = (event, context, callback) => {
  todosUpdate(event, (error, result) => {
    const response = {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin" : "*",
        "Access-Control-Allow-Methods" : "OPTIONS,GET,PUT,POST,DELETE",
        'Access-Control-Allow-Credentials': true
      },
      body: JSON.stringify(result),
    };

    context.succeed(response);
  });
};

module.exports.delete = (event, context, callback) => {
  todosDelete(event, (error, result) => {
    const response = {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin" : "*",
        "Access-Control-Allow-Methods" : "OPTIONS,GET,PUT,POST,DELETE",
        'Access-Control-Allow-Credentials': true
      },
      body: JSON.stringify(result),
    };

    context.succeed(response);
  });
};
