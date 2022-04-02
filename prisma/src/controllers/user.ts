import { Request, Response } from "express"
import { prismaClient } from "../data/prismaClient"
import bcrypt from "bcrypt"

class userControlers{
    static allUsers(req: Request, res: Response){
        res.status(200).json({message:"Funciona!"})
    }

    static async postUsers(req: Request, res: Response){
        const{id, email, password} = req.body
        if(!email){
            res.status(422).json({message: "Email é obrigatorio para cadastro de usuario!"})
            return
        } 
        const emailExist = await prismaClient.user.findUnique({ where: {email} })
        if(emailExist){
            res.status(422).json({message: "Email já cadastratado, informe um email valido!"})
            return 
        }
        const salt = await bcrypt.genSalt(12)
        const passwordHash = await bcrypt.hash(password, salt)
        const user = await prismaClient.user.create({
            data:{
                id,
                email,
                password: passwordHash
            }
        })
        res.status(200).json({user})
    }
}

export default  userControlers