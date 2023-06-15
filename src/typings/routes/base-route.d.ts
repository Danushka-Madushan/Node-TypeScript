declare module 'routes/base-route' {
    type Data = {
        key: string,
        value: string | object | Array<object>
    }

    export namespace queryRequest {
        interface TParams {
            id: string,
            city: string
        }

        interface TReq {
            id: string,
            data: Data
        }

        interface TQuery {
            year?: string,
            user?: string
        }
    }
}
