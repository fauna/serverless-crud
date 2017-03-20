const faunadb = require('faunadb');

function clientForEvent(event) {
  const authData = event.requestContext.authorizer;
  if (authData.principalId) {
    if (authData.faunadb) {
      return new faunadb.Client({ secret: authData.faunadb });
    }
  }
}

module.exports.clientForEvent = clientForEvent;
