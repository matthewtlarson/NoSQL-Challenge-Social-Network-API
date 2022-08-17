const router = require('express').Router();
const userRoutes = require('../routes');
const thoughtRoutes = require('../routes');

router.use('/api/users', userRoutes);

router.use('/api/thoughts', thoughtRoutes);

router.use((req, res) => {
  return res.send('Wrong route!');
});


module.exports = router;