import { usuarioService } from "../services/usuarioService.js";

export const usuarioController = {

    async getById(req, res){
            try{
                const usuario = await usuarioService.getUsuarioId(req.params.id);
                res.json(usuario);
            }catch(error){
                res.status(404).json({erro: error.message})
            }
        },
    async getByEmail(req, res){
            try{
                const usuario = await usuarioService.getUsuarioEmail(req.params.email.senha);
                res.json(usuario);
            }catch(error){
                res.status(404).json({erro: error.message})
            }
        }
}