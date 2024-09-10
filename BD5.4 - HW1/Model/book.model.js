let { Datatypes, sequelize } = require("../lib/");

let book = sequelize.define("book", {
  title: Datatypes.TEXT,
  genre: Datatypes.TEXT,
  publicationYear: Datatypes.INTEGER,
});
module.exports = {
  book,
};
