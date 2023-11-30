import {Router} from "express";
import CheckToken from "../../../config/auth/CheckToken.js";
import UserController from "../controllers/UserController.js";
const router = new Router();

router.post("/api/user/auth", UserController.getAccessToken);
router.post("api/user/create", UserController.createUser)
router.use(CheckToken)
router.get("/api/user/email/:email", UserController.findByEmail);


export default router;