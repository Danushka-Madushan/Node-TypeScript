import express, { Express, NextFunction, Request, Response } from 'express'
import { DevelopmentLog, ExpressResponse } from './response'
import { ExpressRequest } from './middlewares/express-validate'
import { createServer } from 'http'
import { Server } from 'socket.io'
import { WS } from './ws/socket'

const app: Express = express()
const server = createServer(app)
WS(new Server(server))

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

const sv = server.listen(process.env.PORT || 8080, () => {
    const { address, port } = sv.address() as AddressInfo
    console.log(`Server is Running in http://${ address }:${ port }`)
})
