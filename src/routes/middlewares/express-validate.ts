import { NextFunction, Request, Response } from 'express';
import { ExpressResponse } from '../../core/utils/response.js';
import Joi, { ValidationResult } from 'joi';

const RequestCase = (originalUrl: string, method: string) => {
    return `[${ method }]-${ originalUrl }` as const
}

/* Request body validation schema */
const ExpressSchemas = async ({ originalUrl, method, body }: Request<object, object, object>): Promise<ValidationResult | boolean> => {
    /* Joi Schema Function */
    const ObjectSchema = async <T extends Record<string, Joi.Schema | object>>(schema: T, allowunknown = false) => {
        return await Joi.object(schema).unknown(allowunknown).validateAsync(body) as ValidationResult
    }
    
    switch (RequestCase(originalUrl, method)) {
        case '[POST]-/api/': {
            return await ObjectSchema({})
        }

        default: {
            return true
        }
    }
}

export const ExpressRequest = async (req: Request<object, object, object>, res: Response, next: NextFunction): Promise<void> => {
    try {
        await ExpressSchemas(req)
        next()
    } catch (error: unknown) {
        if (Joi.isError(error)) {
            return ExpressResponse(res, false, 400, { message: error.details[0].message.replace(/"/g, '') })
        }
        return ExpressResponse(res, false, 500, "ERROR")
    }
}
