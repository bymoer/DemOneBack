import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken';
import { userAuthKey } from "../config/auth.config.js";
import { dbHelper } from "../models/index.js";
import { IRole } from "../types/role.type.js";
import { IUser } from "../types/user.type.js";

const User = dbHelper.user;
const Role = dbHelper.role;
const secret = userAuthKey.secret;

const verifyToken = (req: Request, res: Response, next: NextFunction) => {

    let token = req.session?.token;

    if(!token){
        return res.status(403).send(
            {
                message: "No token provided!"
            }
        );
    }
    
    // Not the best solution - fix any
    jwt.verify(token, secret, (err: any, decoded: any) => {
        if(err){
            return res.status(401).send(
                {
                    message: "Unauthorized!"
                }
            )
        }

        // Needs optimizing
        req.body.userId = decoded.id;

        next();
    });

}

const isAdmin = (req: Request, res: Response, next: NextFunction) => {

    User.findById(req.body.userId)
    .then((user: IUser) => {

        Role.find({_id: { $in: user.userRole }})
            .then((roles: Array<IRole>) => {

                console.log(roles);
                console.log(roles.length)

                for ( let i = 0; i < roles.length; i++ ){
                    
                    console.log(roles[i].name)

                    if(roles[i].name === 'admin'){
                        next();
                        return;
                    }

                }

                res.status(403).send(
                    {
                        message: 'Admin role required!'
                    }
                );
                return;

            })

    })
    .catch((err: Error) => {
        res.status(400).send(
            {
                message: 'Error confirming User Role!'
            }
        )
    })

}

const isModerator = (req: Request, res: Response, next: NextFunction) => {

    User.findById(req.body.userId)
        .then((user: IUser) => {

            Role.find({_id: { $in: user.userRole }})
                .then((roles: Array<IRole>) => {

                    console.log(roles);
                    console.log(roles.length)

                    for ( let i = 0; i < roles.length; i++ ){
                        
                        console.log(roles[i].name)

                        if(roles[i].name === 'moderator'){
                            next();
                            return;
                        }

                    }

                    res.status(403).send(
                        {
                            message: 'Moderator role required!'
                        }
                    );
                    return;

                })

        })
        .catch((err: Error) => {
            res.status(400).send(
                {
                    message: 'Error confirming User Role!'
                }
            )
        })

}

const authJwt = {
    verifyToken,
    isAdmin,
    isModerator
}

export default authJwt;