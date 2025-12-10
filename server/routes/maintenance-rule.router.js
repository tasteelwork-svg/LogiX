import express from "express";
import maintenanceRuleController from "../controllers/maintenance-rule.controller.js";

const router = express.Router();

// CRUD Routes
router.get("/maintenance-rule/:id", maintenanceRuleController.getOne);
router.get("/maintenance-rules", maintenanceRuleController.getAll);
router.post("/create-maintenance-rule", maintenanceRuleController.create);
router.delete("/delete-maintenance-rule/:id", maintenanceRuleController.delete);
router.put("/update-maintenance-rule/:id", maintenanceRuleController.update);

export default router;
