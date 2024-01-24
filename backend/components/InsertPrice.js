const AddPlaceData = (req, res) => {
  const db = req.app.locals.db;
  const q = "INSERT INTO `mekelle_tour`.`Price`( `name`, `transportation`,`cost`)  values(?)";
  const values = [
    req.body.destination,
    req.body.transportation,
    req.body.cost,
  ];
  console.log(values)
  console.log("inside post");
 db.query(q, [values], (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    else return res.json("added");
  });
}

export default AddPlaceData;

