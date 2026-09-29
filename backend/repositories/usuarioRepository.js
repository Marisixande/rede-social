import {query} from "../config/db.js";

export const usuarioRepository = {
    async getUserByEmail(email){
        const res = await query("SELECT * FROM usuarios WHERE email = $1;", [email]);
        return res.rows[0];
    }
}