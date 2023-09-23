import { ENV } from '../../config/config.js'

/* Development Log (Only works Under development ENV) */
export const DevelopmentLog = (log: string, ignore: boolean = false): void => {
    if (ignore) {
        console.log(log)
        return
    }
    if (ENV.NODE_ENV === 'development') {
        console.log(log)
    }
}
