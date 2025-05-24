const express = require('express');
const router = express.Router();
const wigController = require('../controllers/wigController');
const checkJwt = require('../middleware/auth');

/**
 * @swagger
 * tags:
 *   name: Wigs
 *   description: Wig management
 */

/**
 * @swagger
 * /api/wigs:
 *   get:
 *     summary: Get all wigs
 *     tags: [Wigs]
 *     responses:
 *       200:
 *         description: A list of wigs
 */
router.get('/', wigController.getAllWigs);

/**
 * @swagger
 * /api/wigs/{id}:
 *   get:
 *     summary: Get a wig by ID
 *     tags: [Wigs]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The wig ID
 *     responses:
 *       200:
 *         description: Wig found
 *       404:
 *         description: Wig not found
 */
router.get('/:id', wigController.getWigById);

/**
 * @swagger
 * /api/wigs:
 *   post:
 *     summary: Create a new wig
 *     tags: [Wigs]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [name, length, color, style, price, material]
 *             properties:
 *               name:
 *                 type: string
 *               length:
 *                 type: string
 *               color:
 *                 type: string
 *               style:
 *                 type: string
 *               price:
 *                 type: number
 *               material:
 *                 type: string
 *               inStock:
 *                 type: boolean
 *               description:
 *                 type: string
 *     responses:
 *       201:
 *         description: Wig created
 *       400:
 *         description: Bad request
 */
router.post('/', checkJwt, wigController.createWig);

/**
 * @swagger
 * /api/wigs/{id}:
 *   put:
 *     summary: Update a wig by ID
 *     tags: [Wigs]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       200:
 *         description: Wig updated
 *       404:
 *         description: Wig not found
 */
router.put('/:id', checkJwt, wigController.updateWig);

/**
 * @swagger
 * /api/wigs/{id}:
 *   delete:
 *     summary: Delete a wig
 *     tags: [Wigs]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Wig deleted
 *       404:
 *         description: Wig not found
 */
router.delete('/:id', checkJwt, wigController.deleteWig);

module.exports = router;


