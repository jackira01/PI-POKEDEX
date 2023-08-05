const { Router } = require('express');
const { BringTypes } = require('../controllers/type');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/', BringTypes);

module.exports = router;
