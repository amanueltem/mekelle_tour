import express from "express";
import mysql from "mysql";
import cors from "cors";
import getPlaces from "./components/places.js";
import getPackages from "./components/packages.js";
import getAccounts from "./components/Account.js";
import addPackage from "./components/AddPackage.js"
import addPlace from "./components/AddPlaceData.js"
const app = express();
const db = mysql.createConnection({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "ne200ths",
  database: process.env.DB_DATABASE || "mekelle_tour",
});
app.locals.db = db;//store db  in locals
db.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
    process.exit(1); // Exit the process if there's a database connection error
  }
  console.log("Connected to MySQL!");
});
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json("Hello this is backend!");
});
app.get("/map", (req, res) => getPlaces(req, res));
app.get("/tour_package", (req, res) => getPackages(req, res));
app.post("/login",(req,res)=>getAccounts(req,res));
app.post("/add_package",(req,res)=>addPackage(req,res));
app.post("/add_place",(req,res)=>addPlace(req,res));
const host = '0.0.0.0';
app.listen(8800, host,() => {
  console.log("Connected to backend at port 8800 okey!");
});

// Gracefully close the database connection when the server is shutting down
process.on("SIGINT", () => {
  console.log("Closing database connection...");
  db.end((err) => {
    if (err) {
      console.error("Error closing MySQL connection:", err);
    }
    console.log("MySQL connection closed.");
    process.exit(0);
  });
});
