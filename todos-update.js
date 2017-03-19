'use strict';

const utils = require('./utils');
const faunadb = require('faunadb');
const q = faunadb.query;


module.exports = (event, callback) => {
  console.log("update todo", event);
  const data = JSON.parse(event.body);
  const client = utils.clientForEvent(event);
  if (!client) {
    callback("not authorized");
  } else {
    return client.query(q.Update(q.Ref("classes/todos/"+event.pathParameters.id), {data}))
    .then((response) => {
      console.log("success", response);
      callback(false, response);
    }).catch((error) => {
      console.log("error", error);
      callback(error)
    })
  }
};
