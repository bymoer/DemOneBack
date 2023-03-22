import authJwt from "../middlewares/authJwt.js";
import { userController } from "../controllers/user.controller.js";
import { Router, Request, Response, NextFunction } from "express";

const app = Router();

app.use( (req: Request, res: Response, next: NextFunction) => {
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, Content-Type, Accept'
    );
    next();
})

/**
 * Test routes
 */

app.get(
    '/api/test/all',
    userController.allAccess
);

app.get(
    '/api/test/user',
    [authJwt.verifyToken],
    userController.userBoard
);

app.get(
    '/api/test/mod',
    [authJwt.verifyToken, authJwt.isModerator],
    userController.moderatorBoard
);

app.get(
    '/api/test/admin',
    [authJwt.verifyToken, authJwt.isAdmin],
    userController.adminBoard
);

/**
 * Hotel routes
 */

app.get(
    '/api/mod/hotel',
    [authJwt.verifyToken, authJwt.isModerator],
    userController.moderatorHotel
)

export default app;