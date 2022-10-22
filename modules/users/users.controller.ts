import { Request, Response } from "express";
import { UserService } from "./users.service";

const service = new UserService();

export const createUser = async (req: Request, res: Response) => {
    await service.createUser(req,res);
}

export const getUsers = async(req: Request, res: Response) => {
    await service.getAllUsers(res);
}

export const updateUser = async(req: Request, res: Response) => {
    await service.updateUser(req, res);
}