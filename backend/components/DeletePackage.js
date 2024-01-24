const AddPackage = (req, res) => {
  const db = req.app.locals.db;
  const q = "DELETE FROM `mekelle_tour`.`tour_package` WHERE  package_id=?";
  const value= req.body.package_id;
  console.log(value)
  console.log("inside post");
 db.query(q, [value], (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    else return res.json("deleted");
  });
}

export default AddPackage;

