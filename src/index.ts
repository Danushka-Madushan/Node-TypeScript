import express, { Application, NextFunction, Request, Response } from 'express'
import helmet from 'helmet'
import cors from 'cors'

import { DevelopmentLog } from './core/utils/dev.js'
import { ExpressRequest } from './middlewares/express-validate.js'
import { ExpressResponse } from './core/utils/response.js'
import { PORT } from './config/config.js'
import { AddressInfo } from 'index'

import Routes from './routes/base-route.js'

const app: Application = express()

app.use(helmet())
app.use(cors())
app.use(express.json())

app.use((req: Request, res: Response, next: NextFunction) => {
    DevelopmentLog(req.originalUrl)
    next()
})

app.use(ExpressRequest)

app.use('/api', Routes)

app.use('*', (req: Request, res: Response) => {
    return ExpressResponse(res, false, 403, 'Forbidden')
})

const server = app.listen(process.env.PORT || PORT, () => {
    const { address, port } = server.address() as AddressInfo
    console.log(`Server is Running in [${ process.env.NODE_ENV.toUpperCase() }] http://${ address }:${ port }`)
})
