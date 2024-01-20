import express from "express";
import mysql from "mysql";
import cors from "cors";
const app = express();
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "ne200ths",
  database: "test",
});
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json("Hello this is backend!");
});
app.get("/books", (req, res) => {
  const q = "SELECT * FROM books";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    else return res.json(data);
  });
});

app.post("/books", (req, res) => {
  const q = "INSERT INTO `test`.`books` ( `title`, `desc`, `price`, `cover`)   values(?)";
  const values = [
    req.body.title,
    req.body.desk,
    req.body.price,
    req.body.cover,
  ];
  console.log("inside post");
  db.query(q, [values], (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    else return res.json("book has been created sucessfully");
  });
});

app.delete("/books/:id", (req, res) => {
  const bookId = req.params.id;
  const q = "DELETE FROM books WHERE id=?";
  db.query(q, [bookId], (err, data) => {
    if (err) return res.json(err);
    else {
      console.log("Book has been dleted sucessfully. ");
      return res.json("Book has been deleted sucessfully.");
    }
  });
});
app.listen(8800, () => {
  console.log("Connected to backend at port 8800 okey!");
});