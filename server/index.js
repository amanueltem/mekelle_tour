import express from "express";
import mysql from "mysql";
import cors from "cors";
const app = express();
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "ne200ths",
  database: "mekelle_tour",
});
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json("Hello this is backend!");
});
app.get("/map", (req, res) => {
  const q = "SELECT * FROM places";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    else return res.json(data);
  });
});
app.listen(5000, () => {
  console.log("Connected to backend at port 5000 okey!");
});
