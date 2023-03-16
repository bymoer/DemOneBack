import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken';
import { userAuthKey } from "../config/auth.config.js";
import { dbHelper } from "../models/index.js";
import { IRole } from "../types/role.type.js";
import { IUser } from "../types/user.type.js";

const User = dbHelper.User;
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
        
        // Using body instead of setting it directly on the req obj - typescript doesn't like
        req.body.userId = decoded.id;
        
        next();
    })

}

const isAdmin = (req: Request, res: Response, next: NextFunction) => {

    User.findById(req.body.userId).exec((err: Error, user: IUser) => {
        if(err){
            res.status(500).send(
                {
                    message: err
                }
            );
        }

        Role.find(
            {
                _id: { $in: user.userRole },
            },
            (err: Error, roles: Array<IRole>) => {
                if(err){
                    res.status(500).send(
                        {
                            message: err
                        }
                    );
                }

                for (let i = 0; i < roles.length; i++){
                    if(roles[i].name === 'admin') {
                        next();
                        return;
                    }
                }

                res.status(403).send(
                    {
                        message: 'Require Admin Role!'
                    }
                )
            }
        )
    })

}

const isModerator = (req: Request, res: Response, next: NextFunction) => {

    User.findById(req.body.userId).exec((err: Error, user: IUser) => {
        if(err){
            res.status(500).send(
                {
                    message: err
                }
            );
            return;
        }

        Role.find(
            {
                _id: { $in: user.userRole },
            },
            (err: Error, roles: Array<IRole>) => {
                if(err){
                    res.status(500).send(
                        {
                            message: err
                        }
                    );
                    return;
                }

                for ( let i = 0; i < roles.length; i++ ) {
                    if(roles[i].name === 'moderator'){
                        next();
                        return;
                    }
                }

                res.status(403).send(
                    {
                        message: 'Require moderator Role!'
                    }
                );
                return;
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