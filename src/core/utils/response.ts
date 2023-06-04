import { Response } from 'express'

type TData = 'Success' | 'Forbidden' | object | Array<object>

interface TRes {
    status: boolean,
    data: TData
}

export const newPromise = async (): Promise<[string]> => {
    return Promise.resolve(['Name'])
}

export const ExpressResponse = (res: Response, status: boolean, code: number, data: TData ): void => {
    const response: TRes = {
        status: status,
        data: data
    }
    res.status(code).json(response)
    return
}
