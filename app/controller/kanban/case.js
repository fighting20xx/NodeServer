'use strict';

const Controller = require('egg').Controller;
const { CODE_KEY,MESSAGE_KEY,RESULT_KEY } = require('../../dim/ajaxStruct');
const { SUCCESS,SUCCESS_DESC } = require('../../dim/StatusCode');


// todo 参数校验
class CaseController extends Controller {
    async query() {
        const {
            ctx,
            service
        } = this;
        const res = await service.kanban.case.query(ctx.query);
        ctx.body = {
            [CODE_KEY]: SUCCESS,
            [MESSAGE_KEY]: SUCCESS_DESC,
            [RESULT_KEY]: res,
        };

    }
    async list() {
        const {
            ctx,
            service
        } = this;

        const res = await service.kanban.case.list();
        ctx.body = {
            [CODE_KEY]: SUCCESS,
            [MESSAGE_KEY]: SUCCESS_DESC,
            [RESULT_KEY]: res,
        };

    }

    async create() {
        const {
            ctx,
            service
        } = this;
        console.log(ctx.request.body);
        const res = await service.kanban.case.create(ctx.request.body)

        ctx.body = {
            [CODE_KEY]: SUCCESS,
            [MESSAGE_KEY]: SUCCESS_DESC,
            [RESULT_KEY]: res
        };

    }
    async update() {
        const {
            ctx,
            service
        } = this
        const res = await service.kanban.case.update(ctx.request.body);
        ctx.body = {
            [CODE_KEY]: SUCCESS,
            [MESSAGE_KEY]: SUCCESS_DESC,
            [RESULT_KEY]: res
        }

    }
    async delete() {
        const {
            ctx,
            service
        } = this
        const res = await service.kanban.case.delete(ctx.query);
        ctx.body = {
            [CODE_KEY]: SUCCESS,
            [MESSAGE_KEY]: SUCCESS_DESC,
            [RESULT_KEY]: res
        }
    }
}

module.exports = CaseController;
