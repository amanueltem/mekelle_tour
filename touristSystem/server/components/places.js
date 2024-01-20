const getPlaces = (req, res) => {
    const q = "SELECT * FROM places";
    const db = req.app.locals.db;//get db from locals
    db.query(q, (err, data) => {
      if (err) {
        console.error("Error in places query:", err);
        return res.status(500).json({ error: "Internal Server Error" });
      }
      return res.json(data);
    });
  };
  
  export default getPlaces;