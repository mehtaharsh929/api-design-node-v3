import { Router } from 'express'

const controller = (req, res) => {
  res.send({ message: 'item response' })
}
const router = Router()
// /api/item
router
  .route('/')
  .get(controller)
  .post(controller)

// /api/item/:id
router
  .route('/:id')
  .put(controller)
  .delete(controller)
  .get(controller)

export default router
