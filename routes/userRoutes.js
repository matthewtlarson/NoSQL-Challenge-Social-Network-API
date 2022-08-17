const router = require('express').Router();

const { 
  allUsers
  
} = require("../controllers/user");

router.route('/').get(allUsers).post();

router.route('/:id').get().put().delete();

router.route('/:userId/friends/:friendId').post().delete();

module.exports=router;


