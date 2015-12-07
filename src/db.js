'use strict';
var PouchDB = require('pouchdb');

const localDB = module.exports = new PouchDB('beacon-ball');
const remoteDB = new PouchDB('https://pauly.cloudant.com/beacon-ball');
localDB.sync(remoteDB, { live: true });

localDB.saveURL = (url, callback) => {
  const doc = {
    href: url
  };
  localDB.post(doc, callback);
};
