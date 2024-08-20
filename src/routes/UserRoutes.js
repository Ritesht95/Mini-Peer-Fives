import { Router } from "express";
import UserController from "../controller/UserController.js";

const router = Router();

router.get("/", UserController.getAllUsers)
router.post("/", UserController.createUser)
router.put("/:id", UserController.updateUser)


export default router;