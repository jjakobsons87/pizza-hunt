// create variable to hold db conenction 
let db;
// establish a connection to IndexedDB database called 'pizza-hunt' and set it to version 1 
const request = indexedDB.open('pizza_hunt', 1);

// this event will emit if the database version changes (nonexistant to version 1, v1 to v2, etc.)
request.onupgradeneeded = function(event) {
    // save a reference to the database 
    const db = event.target.result;
    // create an object store (table) called `new_pizza`, set it to have an auto incrementing primary key of sorts 
    db.createObjectStore('new_pizza', { autoIncrement: true });
};

// upon a successful 
request.onsuccess = function(event) {
    // when db is successfully created with its ovject store (from onupgradeneeded event above) or simply established a connection, save reference to db in global variable 
    db = event.target.result;

    // check if app is online, if yes run uploadPizza() function to send all local db data to api 
    if (navigator.onLine) {
        // we havent create this yet but will soon so commented out for now 
        // uploadPizza(); 
    }
};

request.onerror = function(event) {
    // log error here
    console.log(event.target.errorCode);
};