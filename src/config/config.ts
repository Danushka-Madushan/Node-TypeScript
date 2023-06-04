import { config } from 'dotenv';config();

interface TData {
    name: string,
    address: {
        country?: "LK" | "USA"
        key: string,
        value: string | boolean
    }[]
}

interface TPerson extends TData {
    age: number
}

export const PORT = 8080

export const tsFunction = (): TPerson => {
    const Human: TPerson = {
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
    return Human
}
