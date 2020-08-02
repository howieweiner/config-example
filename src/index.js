const express = require("express");
const helloHandler = require("./handlers/hello");
const goodbyeHandler = require("./handlers/goodbye.js");
const {port} = require("./config");

const app = express();

app.get( "/", helloHandler);
app.get("/goodbye", goodbyeHandler);

// start the Express server
app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );
