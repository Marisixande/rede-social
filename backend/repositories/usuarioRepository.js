import {query} from "../config/db.js";

export const usuarioRepository = {
    async getUserById(id){
        const res = await query("SELECT nome FROM usuarios WHERE id = $1", [id])
        return res.rows[0]
    },
    async getUserByEmail(email, senha){
        const res = await query("SELECT * FROM usuarios WHERE email = $1 AND senha = $2;", [email, senha]);
        return res.rows[0];
    }
}