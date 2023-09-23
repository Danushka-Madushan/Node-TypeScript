import { NextFunction, Request, Response } from 'express';
import { ExpressResponse } from '../../core/utils/response.js';

export const authorization = (req: Request, res: Response, next: NextFunction): NextFunction | void => {
    const { headers: { authorization } } = req

    if (authorization) {
        req.auth = {
            auth: "Auth String"
        }
        next()
    }

    return ExpressResponse(res, false, {
        status: 403,
        data: "Forbidden"
    })
}
