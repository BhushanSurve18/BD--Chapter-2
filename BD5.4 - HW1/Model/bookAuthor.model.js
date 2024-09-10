let { Datatypes, sequelize } = require("../lib/");

let { book } = require("./book.model");
let { author } = require("./author.model");

let bookAuthor = sequelize.define("bookAuthor", {
  bookId: {
    type: Datatypes.INTEGER,
    references: {
      model: "book",
      key: "id",
    },
  },
  authorId: {
    type: Datatypes.INTEGER,
    references: {
      model: "author",
      key: "id",
    },
  },
});

book.belongsToMany(author, { through: bookAuthor });
author.belongsToMany(book, { through: bookAuthor });
