const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const product_server_routes = require("./routes/product_route");

// middlewar
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

// routes
app.use("/", product_server_routes);


app.listen(9000, () => {
    console.log("SERVER CREATED");
});
