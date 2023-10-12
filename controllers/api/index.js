const router = require('express').Router();
const userRoutes = require('./userRoutes');
const postRoutes = require('./postRoutes');
// const projectRoutes = require('./projectRoutes');

// for routing api/
router.use('/users', userRoutes);
router.use('/posts', postRoutes);


module.exports = router;