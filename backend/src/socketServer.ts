import { createServer, Server as httpServer } from 'http';
import { Server as ioServer } from 'socket.io';
import { app } from './app';
import config from './config';
import { SocketController } from './socketController';

export class SocketServer {
	public static readonly PORT = config.PORT;
	private httpConnection: httpServer;
	private socketHandler: ioServer;
	private socketController: SocketController;

	constructor() {
		this.httpConnection = createServer(app);
		this.socketHandler = new ioServer(this.httpConnection, {
			cors: {
				origin: '*',
			},
		});
		this.socketController = new SocketController(this.socketHandler);
		this.listen();
	}

	// lsiten for requests
	private listen(): void {
		this.httpConnection.listen(SocketServer.PORT, () =>
			console.log(console.log(`Server listening @ http://localhost:${SocketServer.PORT}`))
		);
	}
}

export default new SocketServer();
