# Address Book Demo

This project runs under _node_ with an _express_ server for managing the database and a front end 
created using _Create React App_ running in _ES6_ using _Babel_.  It provides a simple address
book for user that includes organisation and contacts within those organisation.  Data is stored
using a simple persistent database under [NeDB](https://github.com/louischatriot/nedb)

## Setup

To start the application ensure that you have _node.js_ and _npm_ installed on your system.
This application is intended to run on node 7.10.0 or above.
To install all dependencies for the server run _npm install_ in the project root.
To install all dependencies for the client run _npm insall_ in the _client_ directory.

## Starting the Application

In order to use the application both the server and the client parts must be active.  The server is 
started by running _npm start_ in the roo of the project and is available on localhost:3001.  The
client is started by running _npm start_ in the _client_ directory and is available on 
localhost:3000.  The application has sample data already available, stored in _data/contacts.db_.

