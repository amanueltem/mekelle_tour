const AddPackage = (req, res) => {
  const db = req.app.locals.db;
  const q = "INSERT INTO `mekelle_tour`.`tour_package`( `package_id`, `package_destination`,`package_image`,`package_date`,`package_transportation`,`duration`,`package_price`,`package_desc`)  values(?)";
  const values = [
    req.body.name,
    req.body.destination,
    req.body.image,
    req.body.date,
    req.body.transportation,
    req.body.duration,
    req.body.price,
    req.body.description
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

export default AddPackage;

