import { Router } from "express";
import RewardsController from "../controller/RewardsController.js";

const router = Router();

router.post("/", RewardsController.givePoints)
router.get("/user/:userId", RewardsController.getPointTransactions)
router.delete("/:id", RewardsController.deletePointTransaction)


export default router;