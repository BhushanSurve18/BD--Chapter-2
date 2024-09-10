let { Datatypes, sequelize } = require("../lib/");

let author = sequelize.define("author", {
  name: {
    type: Datatypes.STRING,
    allowNull: false,
  },
  birthYear: {
    type: Datatypes.INTEGER,
    allowNull: false,
  },
});

module.exports = { author };
