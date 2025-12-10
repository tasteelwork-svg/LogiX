import express from "express";
import tireController from "../controllers/tire.controller.js";

const router = express.Router();

// CRUD Routes
router.get("/tire/:id", tireController.getOne);
router.get("/tires", tireController.getAll);
router.post("/create-tire", tireController.create);
router.delete("/delete-tire/:id", tireController.delete);
router.put("/update-tire/:id", tireController.update);

export default router;
