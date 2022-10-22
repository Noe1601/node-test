import { Request, Response } from 'express';
import bcrypt from 'bcrypt'
import Users from '../users/entity/user.entity';
import mongoose from 'mongoose';


export class UserService {

    public async createUser(req: Request, res: Response): Promise<any> {

        try {
            const { body } = req;

            const user = new Users(body);
            user.createdDate = new Date();

            const existsEmail = await Users.findOne({ email: body.email });

            if (existsEmail) {
                return res.status(400).json({
                    success: false,
                    data: null,
                    message: 'Este usuario ya está registrado.'
                })
            }

            const salt = bcrypt.genSaltSync();
            user.password = bcrypt.hashSync(body.password, salt);

            await user.save()

            res.status(200).json({
                success: true,
                data: user,
                message: 'Usuario creado correctamente.'
            });

        } catch (error) {
            console.log(error)
            res.status(500).json({
                success: false,
                data: null,
                message: error
            })
        }

    }

    public async getAllUsers(res: Response) : Promise<any> {
        try {
            
            const users = await Users.find();

            res.json({
                success: true,
                data: users,
                message: ""
            })

        } catch (error) {
            res.status(500).json({
                success: false,
                data: null,
                message: error
            })
        }
    }

    public async updateUser(req: Request, res: Response) : Promise<any> {
        try {

            const { id } = req.params;
            const { _id, password, ...rest } = req.body;

            const isValidId = mongoose.Types.ObjectId.isValid(id)

            if(!isValidId) {
                return res.status(404).json({
                    success: false,
                    data: null,
                    message: 'El id no es valido.'
                })
            }
            
            const existsUser = await Users.findById(id);

            if(!existsUser) {
                return res.status(404).json({
                    success: false,
                    data: null,
                    message: 'El usuario no existe.'
                })
            }

            if( password ) {
                const salt = bcrypt.genSaltSync();
                rest.password = bcrypt.hashSync(password, salt);
            }

            const existsEmail = await Users.findOne({ email: rest.email });

            if (existsEmail) {
                return res.status(400).json({
                    success: false,
                    data: null,
                    message: 'Este usuario ya está registrado.'
                })
            }

            const userModified = await Users.findByIdAndUpdate( id , rest );

            res.status(500).json({
                success: true,
                data: userModified,
                message: 'Usuario modificado correctamente.'
            })
            
        } catch (error) {
            console.log(error)
            res.status(500).json({
                success: false,
                data: null,
                message: error
            })
        }
    }

}

module.exports = {
    UserService
}

