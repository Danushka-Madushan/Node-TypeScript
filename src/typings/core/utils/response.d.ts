declare module 'utils/response' {

    export type TData = 'Success' | 'Forbidden' | 'ERROR' | object | Array<object>

    export interface TRes {
        success: boolean,
        data: TData
    }
    
}
