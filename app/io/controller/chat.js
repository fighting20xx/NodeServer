'use strict';


const Controller = require('egg').Controller;
const Spider = require('../../../util/secondHouse');

class CharController extends  Controller {
	async index() {
		await this.ctx.render('home.html',{});
	}

	async online() {

		const nsp = this.app.io.of('/');
		// 向客戶端推送online事件
		nsp.emit('online', '有新成員加入聊天室了')
	}
	async message() {
		const { ctx, app } = this;
		const nsp = app.io.of('/');
		const message = ctx.args[0] || {}
		nsp.emit('broadcast', message);

	}
	async reFleshData() {
		const { ctx, app } = this;
		const nsp = app.io.of('/');
		const number = ctx.args[0] || 1;
		let spider = new Spider();
		spider.run(parseInt(number),function (process) {
			if(process <= 100){
				nsp.emit('reFleshData', process);
			}
		});
	}

}


module.exports = CharController;