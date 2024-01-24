const getPrices = (req, res) => {
  const q = "SELECT * FROM Price WHERE name = ? AND transportation = ?"; // Adjust this query based on your table structure
  const db = req.app.locals.db; // get db from locals
  const { destination, transportation } = req.body;

  db.query(q, [destination, transportation], (err, data) => {
    if (err) {
      console.error("Error in places query:", err);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    return res.json(data);
  });
};

export default getPrices;

