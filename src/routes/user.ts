import { Router } from 'express'
import { loginUser, registerUser, checkToken, authUser } from '../controllers/user';
const router = Router()

router.get("/auth/:id", checkToken, authUser)
router.post('/auth/login', loginUser)
router.post("/auth/register", registerUser);

export default router