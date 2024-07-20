const conn = require("../connection/conn");

const getproduct = (req, res) => {
    const query = "SELECT * FROM food_product";
    conn.query(query, (err, results) => {
        if (err) {
            console.error("Error executing SQL query: " + err.message);
            res.status(500).json({ error: "Internal Server Error" });
        } else {
            res.json(results);
        }
    });
};

module.exports = {
    getproduct,
};