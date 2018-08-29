'use strict';


const Controller = require('egg').Controller;

class CharController extends  Controller {
	async index() {
		await this.ctx.render('home.html',{});
	}

	async hello() {
		  const message = this.ctx.args[0];
		  console.log('chat :', message + ' : ' + process.pid);

		  await this.ctx.socket.emit('res', `Hi! I've got your message: ${message}`);
	}
	async connect() {
		  const message = this.ctx.args[0];
		  console.log('chat :', message + ' : ' + process.pid);

		setInterval(function () {
			this.ctx.socket.broadcast.emit('message', `Hi! I've got your message: ${message}`);
		},1000)
	}
	async message() {
		setInterval(function () {
			 this.ctx.socket.broadcast.emit('message', `Hi! I've got your message: ${message}`);
		},1000)
	}

	async disconnect() {
		const message = this.ctx.args[0];
		console.log('chat :', message + ' : ' + process.pid);

		await this.ctx.socket.broadcast.emit('message', `Hi! I've got your message: ${message}`);
	}
	async error() {
		const message = this.ctx.args[0];
		console.log('chat :', message + ' : ' + process.pid);

		await this.ctx.socket.broadcast.emit('message', `Hi! I've got your message: ${message}`);
	}
}


module.exports = CharController;