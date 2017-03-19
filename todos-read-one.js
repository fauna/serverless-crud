'use strict';

const utils = require('./utils');
const faunadb = require('faunadb');
const q = faunadb.query;

module.exports = (event, callback) => {
  console.log("readOne todo", event);
  const client = utils.clientForEvent(event);
  if (!client) {
    callback("not authorized");
  } else {
    return client.query(q.Get(q.Ref("classes/todos/"+event.pathParameters.id)))
    .then((response) => {
      console.log("success", response);
      callback(false, response);
    }).catch((error) => {
      console.log("error", error);
      callback(error)
    })
  }
};
