import express from 'express'
import {
  requireAdmin,
  requireAuth,
} from '../../middlewares/requireAuth.middleware.js'
import {
  addToy,
  addToyMsg,
  getToyById,
  getToys,
  removeToy,
  removeToyMsg,
  updateToy,
} from './toy.controller.js'

export const toyRoutes = express.Router()

toyRoutes.get('/', getToys)
toyRoutes.get('/:toyId', getToyById)
toyRoutes.post('/', addToy)
toyRoutes.put('/:toyId', updateToy)
toyRoutes.delete('/:toyId', removeToy)

toyRoutes.post('/:toyId/msg', addToyMsg)
toyRoutes.delete('/:toyId/msg/:msgId', removeToyMsg)
