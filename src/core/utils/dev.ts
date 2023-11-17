import { log } from 'console'
import { ENV } from '../../config/config.js'

/* Development Log (Only works Under development ENV) */
export const DevelopmentLog = (logs: string, ignore = false): void => {
    if (ignore) {
        log(logs)
        return
    }
    if (ENV.NODE_ENV === 'development') {
        log(logs)
    }
}
