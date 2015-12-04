import PouchDB from 'pouchdb';

const localDB = new PouchDB('beacon-ball');
const remoteDB = new PouchDB('https://pauly.cloudant.com/beacon-ball')
localDB.sync(remoteDB);

/* localDB.changes().on('change',(foo, bar) => {
  console.log('Ch-Ch-Changes', foo, bar);
}); */

localDB.saveURL = (url, callback) => {
  const doc = {
    href: url
  };
  localDB.post(doc, callback);
};

export default localDB;
