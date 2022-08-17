const router = require('express').Router();

const { 
  
} = require("../controllers/user");

router.route('/thoughts').get().post();

router.route('/:id').get().put().delete();

router.route('/thoughts/:thoughtId/reactions').post().delete();

module.exports=router;