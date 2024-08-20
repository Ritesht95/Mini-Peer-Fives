import { Router } from "express";
import UserRoutes from "./UserRoutes.js";
import RewardRoutes from "./RewardRoutes.js";

const router = Router();

router.use("/api/user", UserRoutes);
router.use("/api/reward", RewardRoutes);

export default router;