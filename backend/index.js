import express from "express";
import mysql from "mysql";
import cors from "cors";
import path from 'path'
import multer from 'multer'
import getPlaces from "./components/places.js";
import getAccounts from "./components/Account.js";
import getAccountsu from "./components/Accountu.js";
import addPackage from "./components/AddPackage.js";
import deletePackage from "./components/DeletePackage.js"
import addPlace from "./components/AddPlaceData.js"
import getPackages from "./components/Packages.js"
import getPrice from "./components/Prices.js"
import getPackage from "./components/Package.js"
import insertPrice from "./components/InsertPrice.js"
import createAccount from "./components/CreateAccount.js";

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






// Set up Multer to handle file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/images'); // Destination folder for uploaded files
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '_' +Date.now()+path.extname(file.originalname));
  },
});

const upload = multer({ storage:storage });

// Handle image upload
app.post('/upload', upload.single('image'), (req, res) => {
  //const imageLocation = req.file.path; // This is the path where the image is stored
  //res.json({ imageLocation });
  const image=req.file.filename;
  return res.json(image);
});







app.get("/map", (req, res) => getPlaces(req, res));
app.get("/tour_package", (req, res) => getPackages(req, res));
app.post("/login",(req,res)=>getAccounts(req,res));
app.post("/loginu",(req,res)=>getAccountsu(req,res))
app.post("/add_package",(req,res)=>addPackage(req,res));
app.post("/add_place",(req,res)=>addPlace(req,res));
app.get("/tour_package", (req, res) => getPackages(req, res));
app.post("/price",(req,res)=>getPrice(req,res));
app.post("/package",(req,res)=>getPackage(req,res));
app.post("/delete_package",(req,res)=>deletePackage(req,res));
app.post("/insert_price",(req,res)=>insertPrice(req,res));
app.post("/register", (req, res) => createAccount(req, res));


app.use(express.static('public'));
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
