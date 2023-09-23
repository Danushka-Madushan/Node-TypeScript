import { Response } from 'express'
import { TRes, TData } from 'utils/response'

type ResponseCode = 200 | 400 | 403 | 500;

type ResponseParams <T extends ResponseCode> = T extends 400
    ? { status: 400, data: { message: string | object } }
    : { status: T, data: TData };

/* Default Response */
export const ExpressResponse = <T extends ResponseCode> (res: Response, status: boolean, config: ResponseParams<T>): void => {
    const response = {
        success: status,
        data: config.data
    }

    res.status(config.status).json(response satisfies TRes)
}
