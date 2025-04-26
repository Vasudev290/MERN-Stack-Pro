import express from "express"
import { loginController, logoutController, registerController } from "../controllers/authController";

//router object
const router = express.Router();

//routes
//Register
router.post('/regsiter', registerController)

//Login
router.post('/login', loginController)

//Logout
router.post('/logout', logoutController)



export default router;