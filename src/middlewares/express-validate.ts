import { NextFunction, Request, Response } from 'express';
import { ExpressResponse } from '../response.js';
import Joi from 'joi';

const ExpressSchemas = async (req: Request): Promise<object> => {
    switch (req.originalUrl) {
        case '/api/v2/set' : {
            return await Joi.object({
                id: Joi.string().required()
            }).validateAsync(req.body)
        }
        default: {
            return {}
        }
    }
}

export const ExpressRequest = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        await ExpressSchemas(req)
        next()
    } catch (error: any) {
        return ExpressResponse(res, false, 400, {
            missing: error.details[0].message,
            message: 'Invalid Payload'
        })
    }
}
