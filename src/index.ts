import express, { Application, NextFunction, Request, Response } from 'express'
import helmet from 'helmet'
import cors from 'cors'

/* Register events */
import './core/services/connection.js'

import { DevelopmentLog } from './core/utils/dev.js'
import { ExpressRequest } from './routes/middlewares/express-validate.js'
import { AddressInfo } from 'src/index'
import { ENV, PORT } from './config/config.js'

import Routes from './routes/base-route.js'
import { ExpressResponse } from './core/utils/response.js'
import { AppEvents } from './core/services/emitter.js'

const app: Application = express()

app.use(helmet())
app.use(cors())
app.use(express.json())

app.use((req: Request, res: Response, next: NextFunction) => {
    DevelopmentLog(req.originalUrl)
    next()
})

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
    if (error instanceof SyntaxError) {
        return ExpressResponse(res, false, 400, {
            message: error.message
        })
    }
    next()
})

app.use(ExpressRequest)

app.use('/api', Routes)

app.get('/api', (req: Request, res: Response) => {
    return res.status(200).json({
        status: 'OK',
        version: ENV.NPM_VERSION,
        message: 'server is up and running...'
    })
})

app.use('*', (req: Request, res: Response) => {
    return res.sendStatus(403)
})

/* Send Singnal to start client and database */
AppEvents.emit('onReady')

/* Start Webserver when DB is Ready */
AppEvents.on('Ready', () => {
    /* Start express webserver when app is ready */
    const server = app.listen(ENV.PORT || PORT, () => {
        const { address, port } = server.address() as AddressInfo
        DevelopmentLog(`API Running in [${ ENV.NODE_ENV.toUpperCase() }] http://${ address }:${ port }`, true)
    })
})
