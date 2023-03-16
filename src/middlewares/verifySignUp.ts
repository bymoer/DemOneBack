import { NextFunction, Request, Response } from "express";
import { dbHelper } from "../models/index.js";
import { USER_MODEL } from "../models/user.model.js";
import { IUser } from "../types/user.type.js";

const ROLES = dbHelper.ROLES;
const User = dbHelper.user;
//const User = USER_MODEL;

const checkDuplicateUsernameOrEmail = (req: Request, res: Response, next: NextFunction) => {

    // Check username
    User.findOne({
        userUserName: req.body.username
    }).exec((err: Error, user: IUser) => {
        if(err) {
            res.status(500).send(
                { 
                    message: err 
                }
            );
            return;
        }

        if(user){
            res.status(400).send(
                {
                    message: 'Failed! Username is already in use!'
                }
            );
            return;
        }

        // Check email
        User.findOne({
            userEmail: req.body.email
        }).exec((err: Error, user: any) => {
            if(err){
                res.status(500).send(
                    {
                        message: err
                    }
                );
                return;
            }

            if(user){
                res.status(400).send(
                    {
                        message: 'Failed! Email is already in use!'
                    }
                );
            }
        })

        next();

    })

}

const checkRolesExist = (req: Request, res: Response, next: NextFunction) => {
    if(req.body.roles){
        for(let i = 0; i < req.body.roles.length; i++){
            if(!ROLES.includes(req.body.roles[i])){
                res.status(400).send(
                    {
                        message: `Failed! Role ${req.body.roles[i]} does not exist!`
                    }
                );
                return;
            }
        }
    }

    next();
}

const verifySignup = {
    checkDuplicateUsernameOrEmail,
    checkRolesExist
}

export default verifySignup;