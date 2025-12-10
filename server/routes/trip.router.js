import express from "express";
import tripController from "../controllers/trip.controller.js";

const router = express.Router();

// CRUD Routes
router.get("/trip/:id", tripController.getOne);
router.get("/trips", tripController.getAll);
router.post("/create-trip", tripController.create);
router.delete("/delete-trip/:id", tripController.delete);
router.put("/update-trip/:id", tripController.update);

export default router;
