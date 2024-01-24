const CreateAccount = (req, res) => {
  const db = req.app.locals.db;
  const q = "INSERT INTO `mekelle_tour`.`Account`  values(?)";
  const values = [
    req.body.email,
    req.body.password,
    req.body.firstAccountCreatedDate,
    req.body.lastLoginDate,
  ];
  console.log(values)
  console.log("inside post");
 db.query(q, [values], (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    else return res.json("success");
  });
}

export default CreateAccount;

