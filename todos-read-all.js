'use strict';

const utils = require('./utils');
const faunadb = require('faunadb');
const q = faunadb.query;

module.exports = (event, callback) => {
  console.log("readAll todo", event);
  const data = JSON.parse(event.body);
  const client = utils.clientForEvent(event);
  if (!client) {
    callback("not authorized");
  } else {
    return client.query(
      q.Map(
        q.Paginate(q.Match(q.Ref("indexes/all_todos"))),
        (ref) => q.Select("data", q.Get(ref))))
    .then((response) => {
      console.log("success", response);
      callback(false, response);
    }).catch((error) => {
      console.log("error", error);
      callback(error)
    })
  }
};
