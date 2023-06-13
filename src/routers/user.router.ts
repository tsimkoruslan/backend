import { Router } from "express";

import { userController } from "../controllers/user.controller";
import { userMiddleware } from "../middlewares/user.middleware";

const router = Router();

router.get("/", userController.findAll);
router.post("/", userMiddleware.isCreateValid, userController.create);
router.get("/:id", userController.findById);
// router.put("/:id", userController.updateById);

export const userRouters = router;
