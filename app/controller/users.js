'use strict';

const Controller = require('egg').Controller;

// todo 参数校验
class UsersController extends Controller {
  async index() {
    const { ctx, service } = this;
    const res = await service.users.index();
    ctx.body = {
      c: 1,
      data: res,
    };
    ctx.status = 200;
  }
  async create() {
    const { ctx, service } = this;
    const res = await service.users.create(ctx.request.body);
    console.log(222);
    ctx.body = {
      c: 1,
      data: res,
    };
    ctx.status = 200;
  }
  async update() {
    const { ctx, service } = this;
    const res = await service.users.update(ctx.request.body);
    ctx.body = {
      c: 1,
      data: res,
    };
    ctx.status = 200;
  }
  async destroy() {

    const { ctx, service } = this;
    const res = await service.users.destroy(ctx.params.id);
    ctx.body = {
      c: 1,
      data: res,
    };
    ctx.status = 200;
  }
}

module.exports = UsersController;
