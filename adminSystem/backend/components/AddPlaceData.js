const AddPlaceData = (req, res) => {
  const db = req.app.locals.db;
  const q = "INSERT INTO `mekelle_tour`.`places`( `name`, `latitude`,`longitude`)  values(?)";
  const values = [
    req.body.name,
    req.body.latitude,
    req.body.longitude,
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

