import express from "express";
import notificationController from "../controllers/notification.controller.js";

const router = express.Router();

// CRUD Routes
router.get("/notification/:id", notificationController.getOne);
router.get("/notifications", notificationController.getAll);
router.post("/create-notification", notificationController.create);
router.delete("/delete-notification/:id", notificationController.delete);
router.put("/update-notification/:id", notificationController.update);

export default router;
