import express, { Express, NextFunction, Request, Response } from 'express'
import { DevelopmentLog, ExpressResponse } from './response.js'
import { ExpressRequest } from './middlewares/express-validate.js'

const app: Express = express()

interface AddressInfo {
    address: String,
    port: Number
}

app.use((req: Request, res: Response, next: NextFunction) => {
    DevelopmentLog(req.originalUrl)
    next()
})

app.use(ExpressRequest)

app.get('/api', async (req: Request, res: Response) => {
    return ExpressResponse(res, true, 200, 'Success')
})

app.post('/api/v2/set', async (req: Request, res: Response) => {
    return ExpressResponse(res, true, 200, 'Success')
})

const server = app.listen(process.env.PORT || 8080, () => {
    const { address, port } = server.address() as AddressInfo
    console.log(`Server is Running in http://${ address }:${ port }`)
})
