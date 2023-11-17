import { AppEvents } from '../services/emitter.js'

AppEvents.on('onReady', () => {
    AppEvents.emit('Ready')
})

export default {}
