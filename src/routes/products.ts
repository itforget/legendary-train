import { Router } from 'express'
import { getProduct, getProducts, addProducts, modifyProduct, deleteProduct } from '../controllers/products'
const router = Router()

router.get('/products', getProducts) 
router.get('/products/:id', getProduct) 
router.post('/products', addProducts)
router.put('/products/:id', modifyProduct)
router.delete('/products/:id', deleteProduct)

export default router