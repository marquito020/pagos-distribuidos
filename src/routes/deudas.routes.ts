import { Router } from "express";
import controller  from "../controllers/deudas.controller.js";

const router = Router();

router.get("/deudas", controller.getAllDeudas);
router.get("/deudas/:id", controller.getDeuda);

export default router;
