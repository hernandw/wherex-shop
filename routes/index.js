const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homecontroller.js')

router.get('/', homeController.mostrarMensaje);

module.exports = {
    router
}
