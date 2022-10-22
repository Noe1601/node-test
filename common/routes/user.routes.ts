import { Router, Request, Response } from "express";
import { createUser, getUsers, updateUser } from "../../modules/users/users.controller";
import { check } from 'express-validator'

const router = Router();

router.get('/', getUsers);

router.post('/', createUser)

router.put('/:id',[
    check('id', 'No es un id valido').isMongoId()
], updateUser);

export default router;