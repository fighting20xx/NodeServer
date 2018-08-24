'use strict';

const Controller = require('./base')

// todo 参数校验
class testController extends Controller {
    async index() {
        const {
            ctx,
            service
        } = this
        const res = await service.test.index()
        this.success(res)
    }
    async create() {
        const {
            ctx,
            service
        } = this
        const res = await service.test.create(ctx.request.body)
        this.success(res)
    }
    async destroy() {
        const {
            ctx,
            service
        } = this
        const res = await service.test.destroyById(ctx.params.id)
        this.success(res)
    }
    async show() {
        const {
            ctx,
            service
        } = this
        const res = await service.test.rawQuery(ctx.params.id)
        this.success(res)
    }
}

module.exports = testController;
