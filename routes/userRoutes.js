const router = require('express').Router();

const { 
  allUsers,
  getUserById,
  createUser,
  deleteUser,
  updateUser,
} = require("../controllers/user");

router.route('/').get(allUsers).post(createUser);

router.route('/:id').get(getUserById).put(updateUser).delete(deleteUser);

router.route('/:userId/friends/:friendId').post(createUser).delete(deleteUser);

module.exports=router;


