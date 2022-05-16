import { Server as IOServer, Socket } from 'socket.io';
import { SocketEvents } from './constants/SocketEvents';

export class SocketController {
	private socketHandler: IOServer;

	constructor(handler: IOServer) {
		this.socketHandler = handler;
		this.listen();
	}

	private listen() {
		this.socketHandler.on(SocketEvents.CONNECT, (socket: Socket) => {
			console.log('New user connected...', socket.id);
			socket.emit('init', { data: 'hello world' });

			socket.on(SocketEvents.DISCONNECT, () => {
				console.log('User has disconnected...');
			});
		});
	}
}
