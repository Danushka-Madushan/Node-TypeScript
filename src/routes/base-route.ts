import { Router, Request, Response } from 'express';
import { ExpressResponse } from '../response.js';
import { tsFunction } from '../config/config.js';

const app = Router()

app.get('/v2/set', async (req: Request, res: Response) => {
    return ExpressResponse(res, true, 200, tsFunction())
})

export default app