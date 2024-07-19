const router = require('express').Router();
const homeRoutes = require('./api/homeRoutes');

router.use('/', homeRoutes);

module.exports = router;