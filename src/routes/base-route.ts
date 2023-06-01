import { Router, Request, Response } from 'express';
import { ExpressResponse } from '../response.js';

const app = Router()

app.post('/v2/set', (req: Request, res: Response) => {
    return ExpressResponse(res, true, 200, 'Success')
})

export default app
