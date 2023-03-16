import verifySignup from "../middlewares/verifySignUp.js";
import { controller } from "../controllers/auth.controller.js";
import { NextFunction, Router, Request, Response } from "express";

const app = Router();

app.use((req: Request, res: Response, next: NextFunction) => {
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, Content-Type, Accept'
    );
    next();
})

app.post(
    '/api/auth/signup',
    [
        verifySignup.checkDuplicateUsernameOrEmail,
        verifySignup.checkRolesExist
    ],
    controller.signup
);

app.post(
    '/api/auth/signin',
    controller.signin
);

app.post(
    '/api/auth/signout',
    controller.signout
);

export default app;