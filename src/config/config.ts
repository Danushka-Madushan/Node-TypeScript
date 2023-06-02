import { config } from 'dotenv';config();

export const tsFunction = (): string => {
    return 'Hello from TypeScript'
}

interface TData {
    name: string,
    address: Array<{
        country?: "LK" | "USA"
        key: string,
        value: string | boolean
    }>
}

interface TPerson extends TData {
    age: number
}

export const human: TPerson = {
    name: "Alex Murphy",
    address: [
        {
            key: "District",
            value: "Hambantota",
            country: "LK"
        }
    ],
    age: 12
}
