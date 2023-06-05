declare module 'config' {

    interface TData {
        name: string,
        address: {
            country?: "LK" | "USA"
            key: string,
            value: string | boolean
        }[]
    }
    
    export interface TPerson extends TData {
        age: number
    }
    
}
