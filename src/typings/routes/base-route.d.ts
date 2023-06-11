declare module 'routes/base-route' {
    type Data = {
        key: string,
        value: string | object | Array<object>
    }

    export interface TParams {
        id: string,
        city: string
    }

    export interface TReq {
        id: string,
        data: Data
    }

    export interface TQuery {
        year?: string,
        user?: string
    }
}
