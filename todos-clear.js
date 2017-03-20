'use strict';

const utils = require('./utils');
const faunadb = require('faunadb');
const q = faunadb.query;

module.exports = (event, callback) => {
  console.log("toggleAll todo", event);
  const client = utils.clientForEvent(event);
  if (!client) {
    callback("not authorized");
  } else {
    return client.query(
      q.Map(
        q.Paginate(q.Match(q.Ref("indexes/all_todos"))),
        (ref) => q.If(q.Select(["data", "completed"], q.Get(ref)),
          q.Delete(q.Select("ref", q.Get(ref))),
          true)))
    .then((response) => {
      console.log("success", response);
      callback(false, response);
    }).catch((error) => {
      console.log("error", error);
      callback(error)
    })
  }
};
