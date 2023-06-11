import { config } from 'dotenv';config();
import { TPerson } from 'config';

export const PORT = 8080

export const SampleFunction = (): TPerson => {
    return {
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
}
