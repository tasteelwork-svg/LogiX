import express from "express";
import maintenanceController from "../controllers/maintenance.controller.js";

const router = express.Router();

// CRUD Routes
router.get("/maintenance/:id", maintenanceController.getOne);
router.get("/maintenances", maintenanceController.getAll);
router.post("/create-maintenance", maintenanceController.create);
router.delete("/delete-maintenance/:id", maintenanceController.delete);
router.put("/update-maintenance/:id", maintenanceController.update);

export default router;
