import { Response } from 'express'
import { TRes, TData } from 'utils/response'

export const ExpressResponse = (res: Response, status: boolean, code: number, data: TData ): void => {
    const response = {
        success: status,
        data: data
    }
    res.status(code).json(response satisfies TRes)
}
