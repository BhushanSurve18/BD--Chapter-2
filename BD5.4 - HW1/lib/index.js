let sq = require("sequelize");
const { Datatypes } = require("../../BD5.4 - HW1/lib");
let sequelize = new sq.Sequelize({
  dialect: "sqlite",
  stroage: "./database.sqlite",
});

module.exports = { Datatypes: sq.DataTypes, sequelize };
