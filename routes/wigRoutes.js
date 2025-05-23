// routes/wigRoutes.js

const express = require('express');
const router = express.Router();
const wigController = require('../controllers/wigController');

// All wigs
router.get('/', wigController.getAllWigs);

// One wig by ID
router.get('/:id', wigController.getWigById);

// Create a new wig
router.post('/', wigController.createWig);

// Update a wig by ID
router.put('/:id', wigController.updateWig);

// Delete a wig by ID
router.delete('/:id', wigController.deleteWig);

module.exports = router;


