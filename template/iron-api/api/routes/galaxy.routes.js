const express = require('express')
const {
  getAllGalaxies,
  getGalaxyById,
  addGalaxy,
  editGalaxy,
  deleteGalaxy,
} = require('../controllers/galaxy.controller')

const router = express.Router()

/**
 * @route GET /galaxies/all
 * @group Galaxies - Operations involving all documents
 * @returns {Array.<Galaxy>} 200 - An array of all galaxies
 * @returns {Response.model}  400 - Bad request
 */
router.get('/galaxies/all', getAllGalaxies)

/**
 * @route POST /galaxy
 * @group Galaxy - CRUD
 * @param {Galaxy.model} galaxy.body.required - Galaxy to be created
 * @returns {Galaxy.model} 200 - The galaxy saved
 * @returns {Response.model}  400 - Bad request
 */
router.post('/galaxy', addGalaxy)

/**
 * @route GET /galaxy/{id}
 * @group Galaxy - CRUD
 * @param {string} id.path.required - ID generated by mongoDB after creating document
 * @returns {Galaxy.model} 200 - A single galaxy
 * @returns {Response.model}  400 - Bad request
 */
router.get('/galaxy/:id', getGalaxyById)

/**
 * @route PATCH /galaxy/{id}
 * @group Galaxy - CRUD
 * @param {string} id.path.required - ID generated by mongoDB after creating document
 * @param {Galaxy.model} galaxy.body.required
 * @returns {Response.model} 200 - Document successfully patched
 * @returns {Response.model}  400 - Bad request
 */
router.patch('/galaxy/:id', editGalaxy)

/**
 * @route DELETE /galaxy/{id}
 * @group Galaxy - CRUD
 * @param {string} id.path.required - ID generated by mongoDB after creating document
 * @returns {Response.model} 200 - Document successfully deleted
 * @returns {Response.model}  400 - Bad request
 */
router.delete('/galaxy/:id', deleteGalaxy)

module.exports = router