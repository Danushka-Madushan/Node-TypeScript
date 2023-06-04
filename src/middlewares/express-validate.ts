import { NextFunction, Request, Response } from 'express';
import { ExpressResponse } from '../core/utils/response.js';
import Joi, { ValidationError, ValidationResult } from 'joi';

const ExpressSchemas = async (req: Request): Promise<ValidationResult | boolean> => {
    switch (req.originalUrl) {
        case '/api/v2/set' : {
            return await Joi.object({
                id: Joi.string().required()
            }).validateAsync(req.body) as ValidationResult
        }
        default: {
            return true
        }
    }
}

export const ExpressRequest = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        await ExpressSchemas(req)
        next()
    } catch (error: unknown) {
        return ExpressResponse(res, false, 400, {
            missing: (error as ValidationError).details[0].message.replace(/"/g, ''),
            message: 'INVALID_PAYLOAD'
        })
    }
}
