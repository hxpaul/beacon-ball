import PouchDB from 'pouchdb';

const localDB = new PouchDB('beacon-ball');
const remoteDB = new PouchDB('https://pauly.cloudant.com/beacon-ball')
localDB.sync(remoteDB, { live: true });

localDB.saveURL = (url, callback) => {
  const doc = {
    href: url
  };
  localDB.post(doc, callback);
};

export default localDB;
