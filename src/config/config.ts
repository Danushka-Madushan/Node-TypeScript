import { config } from 'dotenv';config();
import { TPerson } from 'config';

export const V = '1.20.1'

export const PORT = 8080

export const tsFunction = (): TPerson => {
    const Human = {
        name: "Alex Murphy",
        address: [
            {
                key: "District",
                value: "Hambantota",
                country: "LK"
            }
        ],
        age: 12
    } satisfies TPerson
    return Human
}
