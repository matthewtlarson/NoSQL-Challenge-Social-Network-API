const router = require('express').Router();

const { 
  allThoughts,
  getThoughtById,
  createThought,
  deleteThought,
  updateThought,
} = require("../../controllers/thought");

router.route('/').get(allThoughts).post(createThought);

router
  .route('/:thoughtId')
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);

router.route('/:id').get(getThoughtById).put(updateThought).delete(deleteThought);

router.route('/:thoughtId/reactions').post(createThought).delete(deleteThought);

module.exports=router;