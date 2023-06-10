declare module 'response' {

    export type TData = 'Success' | 'Forbidden' | object | Array<object>

    export interface TRes {
        success: boolean,
        data: TData
    }
    
}
