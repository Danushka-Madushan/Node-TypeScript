import { Response } from 'express'

interface Res {
    status: boolean,
    data: string | object | Array<object>
}

export const DevelopmentLog = (log: string): void => {
    if (process.env.NODE_ENV === 'development') {
        console.log(log)
    }
}

export const newPromise = async (): Promise<[string]> => {
    return Promise.resolve(['Name'])
}

export const ExpressResponse = (res: Response, status: boolean, code: number, data: string | object | Array<object> ): void => {
    const response: Res = {
        status: status,
        data: data
    }
    res.status(code).json(response)
}
