const express = require("express");
const {
  createUser,
  getUsers,
  updateUser,
  deleteUser
} = require("../controllers/user");

const router = express.Router();

router
  .route("/users")
  .post(createUser)
  .get(getUsers);

router
  .route("/users/:id")
  .put(updateUser)
  .delete(deleteUser);

module.exports = router;