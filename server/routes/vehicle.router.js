import express from "express";
import vehicleController from "../controllers/vehicle.controller.js";
const router = express.Router();


router.get("/vehicles", vehicleController.getAll);
router.get("/vehicle/:id", vehicleController.getOne);
router.post("/create-vehicle", vehicleController.create);
router.delete("/delete-vehicle/:id", vehicleController.delete);
router.put("/update-vehicle/:id", vehicleController.update);

export default router;
