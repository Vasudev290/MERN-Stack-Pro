import express from "express"
import { loginController, logoutController, registerController } from "../controllers/authController.js";

//router object
const router = express.Router();

//routes
//Register
router.post('/register', registerController)

//Login
router.post('/login', loginController)

//Logout
router.post('/logout', logoutController)



export default router;