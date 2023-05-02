module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "ketan@123",
  DB: "invigrid_db",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};