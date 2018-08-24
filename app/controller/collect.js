'use strict';

const Controller = require('./base')

// todo 参数校验
class testController extends Controller {
    async index() {
        const {
            ctx,
            service
        } = this
        let key = `common-${ctx.params.id}-${ctx.params.name}`
        const res = await service.collect.getList(key, 0 , -1)
        this.success(res)
    }
    async create() {
        const {
            ctx,
            service
        } = this
        const res = await service.collect.create(ctx.request.body)
        this.success(res)
    }
    async destroy() {
        const {
            ctx,
            service
        } = this
        const res = await service.collect.destroyById(ctx.params.id)
        this.success(res)
    }
    async show() {
        const {
            ctx,
            service
        } = this
        const res = await service.collect.rawQuery(ctx.params.id)
        this.success(res)
    }
}

module.exports = testController;
