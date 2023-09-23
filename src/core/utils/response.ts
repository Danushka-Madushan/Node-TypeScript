import { Response } from 'express'
import { TRes, TData } from 'utils/response'

type ResponseCode = 200 | 400 | 403 | 500;

type ResponseFunction = <T extends ResponseCode> (res: Response,
    status: T extends 200 ? true : false,
    code: T,
    data: T extends 400 ? { message: string | object } : TData
) => void

/* Default Response */
export const ExpressResponse: ResponseFunction = (res, status, code, data): void => {
    const response = {
        success: status,
        data: data
    }

    res.status(code).json(response satisfies TRes)
}
