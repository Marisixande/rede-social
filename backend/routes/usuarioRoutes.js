import { Router } from "express";
import { usuarioController } from "../controllers/usuarioController.js"

const router = Router();

router.get('/usuario/:id', usuarioController.getById);
router.post('/usuario/login', usuarioController.getByEmail)

export default router