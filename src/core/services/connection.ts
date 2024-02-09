import { AppEvents } from './emitter.js'

AppEvents.on('onReady', () => {
    setTimeout(() => {
        AppEvents.emit('Ready')
        /* there must be a delay in order to emit the event */
    }, 1000)
})

export default {}
