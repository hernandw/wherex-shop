const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homecontroller')

router.get('/', homeController.mostrarMensaje);

router.get('/usuario', homeController.mostrarUsuaurio);

module.exports = {
    router
}
