import { Server, Socket } from 'socket.io';

export const WS = (io: Server) => {
    io.on('connection', (socket: Socket) => {
        return socket
    })
}
