// create variable to hold db conenction 
let db;
// establish a connection to IndexedDB database called 'pizza-hunt' and set it to version 1 
const request = indexedDB.open('pizza_hunt', 1);

// this event will emit if the database version changes (nonexistent to version 1, v1 to v2, etc.)
request.onupgradeneeded = function(event) {
    // save a reference to the database 
    const db = event.target.result;
    // create an object store (table) called `new_pizza`, set it to have an auto incrementing primary key of sorts 
    db.createObjectStore('new_pizza', { autoIncrement: true });
};

// upon a successful 
request.onsuccess = function(event) {
    // when db is successfully created with its object store (from onupgradeneeded event above) or simply established a connection, save reference to db in global variable 
    db = event.target.result;

    // check if app is online, if yes run uploadPizza() function to send all local db data to api 
    if (navigator.onLine) {
        // we haven't create this yet but will soon so commented out for now 
        // uploadPizza(); 
    }
};

request.onerror = function(event) {
    // log error here
    console.log(event.target.errorCode);
};

// this function will be executed if we attempt to submit a new pizza and there's no internet connection 
function saveRecord(record) {
    // open a new transaction with the database with read and write permissions 
    const transaction = db.transaction(['new_pizza'], 'readwrite');

    // access the objec store for 'new_pizza'
    const pizzaObjectStore = transaction.objectStore('new_pizza');

    // add record to your store with add method 
    pizzaObjectStore.add(record);
}

function uploadPizza() {
    // open a transaction on your db
    const transaction = db.transaction(['new_pizza'], 'readwrite');

    // access your object store
    const pizzaObjectStore = transaction.pizzaObjectStore('new_pizza');

    // get all record from store and set to a variable 
    const getAll = pizzaObjectStore.getAll();

    // more to come... 
}