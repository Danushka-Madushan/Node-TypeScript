import { ENV } from '../../config/config.js'

export const DevelopmentLog = (log: string): void => {
    if (ENV.NODE_ENV === 'development') {
        console.log(log)
    }
}
