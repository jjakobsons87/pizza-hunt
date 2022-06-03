// create variable to hold db conenction 
let db;
// establish a connection to IndexedDB database called 'pizza-hunt' and set it to version 1 
const request = indexedDB.open('pizza_hunt', 1);