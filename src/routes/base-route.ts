import { Router, Request, Response } from 'express';
import { ExpressResponse } from '../core/utils/response.js';
import { queryRequest } from 'routes/base-route';
import { TRes } from 'utils/response';

const app = Router()

app.post('/post', (req: Request, res: Response) => {
    return ExpressResponse(res, true, 200, 'Success')
})

app.get('/query', (req: Request<queryRequest.TParams, TRes, queryRequest.TReq, queryRequest.TQuery>, res: Response) => {
    const response = {
        params: req.params.city,
        body: req.body.data,
        query: req.query.user
    }
    return ExpressResponse(res, true, 200, response)
})

export default app
