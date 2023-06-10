import { Response } from 'express'
import { TRes, TData } from 'response'

export const newPromise = async (): Promise<[string]> => {
    return Promise.resolve(['Name'])
}

export const ExpressResponse = (res: Response, status: boolean, code: number, data: TData ): void => {
    const response: TRes = {
        success: status,
        data: data
    }
    res.status(code).json(response)
    return
}
