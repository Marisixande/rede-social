import express from "express";
import usuarioRoutes from "../backend/routes/usuarioRoutes.js"
import dotenv from "dotenv";

dotenv.config()
const app = express();
const PORT = process.env.PORT || 3000;

app.use(usuarioRoutes);

app.use(express.json());

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta: ${PORT}...`)
});