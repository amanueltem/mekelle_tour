const getAccountsu = (req, res) => {
  const { email, password } = req.body;
  const q = "SELECT * FROM Account WHERE email=?";
  const db = req.app.locals.db;

  db.query(q, [email], (err, data) => {
    if (err) {
      console.error("Error in places query:", err);
      return res.json("Login failed");
    }

    if (data.length === 0) {
      // User not found
      return res.json("No record found");
    }

    const storedPassword = data[0].password; // Assuming the column is named 'password'

    // Compare plaintext password with stored password
    if (password === storedPassword) {
      // Passwords match, user is authenticated
      return res.json("sucess");
    } else {
      // Passwords do not match
      return res.json("Login failed");
    }
  });
};

export default getAccountsu;

