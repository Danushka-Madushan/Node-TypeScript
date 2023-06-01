import express, { Express, NextFunction, Request, Response } from 'express'
import { DevelopmentLog, ExpressResponse } from './response.js'
import { ExpressRequest } from './middlewares/express-validate.js'
import { createServer } from 'http'
import { Server } from 'socket.io'
import { WS } from './ws/socket.js'

const app: Express = express()
const server = createServer(app)
WS(new Server(server))

import Routes from './routes/base-route.js'

interface AddressInfo {
    address: string,
    port: number
}

app.use(express.json())

app.use(ExpressRequest)

app.use((req: Request, res: Response, next: NextFunction) => {
    DevelopmentLog(req.originalUrl)
    next()
})

app.use('/api', Routes)

app.use('*', (req: Request, res: Response) => {
    return ExpressResponse(res, false, 403, 'Forbidden')
})

const sv = server.listen(process.env.PORT || 8080, () => {
    const { address, port } = sv.address() as AddressInfo
    console.log(`Server is Running in [${ String(process.env.NODE_ENV).toUpperCase() }] http://${ address }:${ port }`)
})
