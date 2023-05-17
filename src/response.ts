import { Response } from 'express'

interface Res {
    status: Boolean,
    data: String | Object | Array<Object>
}

export const DevelopmentLog = (log: string): void => {
    if (process.env.NODE_ENV === 'development') {
        console.log(log)
    }
}

export const ExpressResponse = (res: Response, status: boolean, code: number, data: String | Object | Array<Object> ): void => {
    const response: Res = {
        status: status,
        data: data
    }
    res.status(code).json(response)
}
