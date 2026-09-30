import {usuarioRepository} from "../repositories/usuarioRepository.js"

export const usuarioService = {

    async getUsuarioId(id){
        const usuarioExiste = await usuarioRepository.getUserById(id);
        if(!usuarioExiste){
            throw new Error ("Usuario não encontrado")
        }
        return usuarioExiste
    },
    async getUsuarioEmail(email, senha){
        const usuarioExiste = await usuarioRepository.getUserByEmail(email, senha)
         if(!usuarioExiste){
            throw new Error ("Usuario não encontrado")
        }
        return usuarioExiste
    }

}