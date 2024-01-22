const getPackage = (req, res) => {
  const q = "SELECT * FROM tour_package WHERE package_id= ?"; // Adjust this query based on your table structure
  const db = req.app.locals.db; // get db from locals
    const { package_id, email } = req.body;
  console.log("Package_id:"+package_id);
  console.log("email:"+email);

  db.query(q, [package_id], (err, data) => {
    if (err) {
      console.error("Error in places query:", err);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    return res.json(data);
  });
};

export default getPackage;

