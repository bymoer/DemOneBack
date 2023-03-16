import { Request, Response } from "express";
import { userAuthKey } from "../config/auth.config.js";
import { dbHelper } from "../models/index.js";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { IUser, IUserRole } from "../types/user.type.js";
import { IRole } from "../types/role.type.js";

//const User = dbHelper.user;
const User = dbHelper.user;
const Role = dbHelper.role;

export const signup = (req: Request, res: Response) => {

    const user = new User({
        userUserName: req.body.username,
        userEmail: req.body.email,
        userPassword: bcrypt.hashSync(req.body.password, 8)
    });

    user.save((err: Error, user: IUser) => {
        if(err){
            res.status(500).send(
                {
                    message: err
                }
            );
            return;
        }

        if(req.body.roles){
            Role.find(
                {
                    name: {$in: req.body.roles},
                },
                (err: Error, roles: Array<IUserRole> ) => {
                    if(err){
                        res.status(500).send(
                            {
                                message: err
                            }
                        );
                        return;
                    }

                    user.userRole = roles.map((role) => role._id);
                    user.save((err: Error) => {
                        if(err){
                            res.status(500).send(
                                {
                                    message: err
                                }
                            );
                            return;
                        }

                        res.send(
                            {
                                message: 'User was registered successfully!'
                            }
                        );
                    })
                }
            )
        } else {
            Role.findOne(
                {
                    name: 'user'
                },
                (err: Error, role: IUserRole) => {
                    if(err){
                        res.status(500).send(
                            {
                                message: err
                            }
                        );
                        return;
                    }

                    user.roles = [role._id];
                    user.save((err: Error) => {
                        if(err){
                            res.status(500).send(
                                {
                                    message: err
                                }
                            );
                            return;
                        }

                        res.send(
                            {
                                message: 'User was registered successfully!'
                            }
                        );
                    });
                }
            )
        }
    });

}

export const signin = (req: Request, res: Response) => {
    User.findOne(
        {
            userUsername: req.body.username
        }
    )
    .populate('roles', '-__v')
    .exec((err: Error, user: IUser) => {
        if(err){
            res.status(500).send(
                {
                    message: err
                }
            );
            return;
        }

        if(!user){
            return res.status(404).send(
                {
                    message: 'User not found!'
                }
            )
        }

        let passwordIsValid = bcrypt.compareSync(
            req.body.password,
            user.userPassword
        );

        let token = jwt.sign(
            {
                id: user.userId
            },
            userAuthKey.secret,
            {
                expiresIn: 86400
            }
        );

        // Should have a type !!??
        let authorities = [];

        for (let i = 0; i < user.roles.length; i++) {
            authorities.push('Role_' + user.roles[i].name.toUpperCase());
        }

        // Might be a little.....
        req.session!.token = token;

        res.status(200).send(
            {
                id: user.userId,
                username: user.userUserName,
                email: user.userEmail,
                roles: authorities
            }
        );
    });
}

export const signout = async(req: Request, res: Response) => {
    try {
        req.session = null;
        return res.status(200).send(
            {
                message: 'You\'ve been signed out!'
            }
        )
    } catch (err) {
        // TS issue
        //this.next(err);
    }
}

export const controller =  {signin, signout, signup};