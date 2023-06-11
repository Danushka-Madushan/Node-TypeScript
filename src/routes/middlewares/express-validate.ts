import { NextFunction, Request, Response } from 'express';
import { ExpressResponse } from '../../core/utils/response.js';
import Joi, { ValidationResult } from 'joi';

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
        if (Joi.isError(error)) {
            return ExpressResponse(res, false, 400, {
                missing: error.details[0].message.replace(/"/g, ''),
                message: 'INVALID_PAYLOAD'
            })
        }
        return ExpressResponse(res, false, 500, 'ERROR')
    }
}
