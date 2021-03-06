const db = require("../../data/dbConfig");

module.exports = {
  find,
  findBy,
  findById,
  addUser,
  removeUser,
};

function find() {
  return db("users").select("id", "username");
}

function findBy(filter) {
  return db("users").where(filter).first();
}

function findById(id) {
  return db("users").where({ id }).first().select("id", "username");
}

function addUser(user) {
  return db("users").insert(user);
}

function removeUser(id) {
  return db("users").where({ id }).del();
}
