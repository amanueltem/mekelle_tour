// config.js
const mysqlConfig = {
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "ne200ths",
  database: process.env.DB_DATABASE || "mekelle_tour",
};

export default mysqlConfig;

