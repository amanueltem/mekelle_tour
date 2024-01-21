const getPlaces = (req, res) => {
    const q = "SELECT cost FROM places where name=? and transportation=?";
    const db = req.app.locals.db;//get db from locals
      const values = [
    req.body.name,
    req.bobdy.transportation,
  ];
    db.query(q, [values],(err, data) => {
      if (err) {
        console.error("Error in places query:", err);
        return res.status(500).json({ error: "Internal Server Error" });
      }
      return res.json(data);
    });
  };
  
  export default getPlaces;
