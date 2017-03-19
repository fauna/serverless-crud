'use strict';

const utils = require('./utils');
const faunadb = require('faunadb');
const q = faunadb.query;

module.exports = (event, callback) => {
  console.log("create todo", event);
  const data = JSON.parse(event.body);
  const client = utils.clientForEvent(event);
  if (!client) {
    callback("not authorized");
  } else {
    data.user = q.Select("ref",q.Get(q.Ref("classes/users/self")));
    return client.query(q.Create(q.Ref("classes/todos"), { data }))
    .then((response) => {
      console.log("success", response);
      callback(false, response);
    }).catch((error) => {
      console.log("error", error);
      callback(error)
    })
  }
};
