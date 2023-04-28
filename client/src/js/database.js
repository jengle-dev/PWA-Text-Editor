import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

  

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => console.error('getDb not implemented');

// TODO: Add logic to a method that accepts some content and adds it to the database - doesn't need to follow a schema
//for put method
  //find the db x
  //connect to db x
  // open a transaction with db x
  // get reference to ObjectStore x
  // get or other method from get call above need id to know to update - content passed to our object to get specific element
  // write to that element/object
  // save to db
export const putDb = async (content) => {
  try {
    // Create a connection to the database database and version we want to use.
  const contactDb = await openDB('contact', 1);

  // Create a new transaction and specify the database and data privileges.
  const tx = contactDb.transaction('contact', 'readwrite');

  // Open up the desired object store.
  const store = tx.objectStore('contact');

  // Use the .put() method on the store and pass in the content.
  const record = store.get(id)
  // const car = { color: blue, wheels: 2 }
  // car.color = red
    record.comment = content.comment;

  const request = await store.put(record);

  // Get confirmation of the request.
  const result = await request;
  console.log('🚀 - data saved to the database', result);

  } catch {
    console.error('putDb not implemented')
  };


}

initdb();
