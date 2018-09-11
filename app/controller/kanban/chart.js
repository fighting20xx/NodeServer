'use strict';

const Controller = require('../base');
// const Controller = require('egg').Controller;
const { CODE_KEY,MESSAGE_KEY,RESULT_KEY } = require('../../dim/ajaxStruct');
const { SUCCESS,SUCCESS_DESC } = require('../../dim/StatusCode');
const Spider = require('../../../util/xsfc');



// todo 参数校验
class ChartController extends Controller {
    async query() {
        const {
            ctx,
            service
        } = this;
        const res = await service.kanban.chart.query(ctx.query);
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

        const res = await service.kanban.chart.list();
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
        const res = await service.kanban.chart.create(ctx.request.body)

        ctx.body = {
            [CODE_KEY]: SUCCESS,
            [MESSAGE_KEY]: SUCCESS_DESC,
            [RESULT_KEY]: res
        };

    }
    async createAll() {
        const {
            ctx,
            service
        } = this;
        const res = await service.kanban.chart.createAll(ctx.request.body)

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
        } = this;
        console.log(ctx.request.body);

        const res = await service.kanban.chart.update(ctx.request.body);
        ctx.body = {
            [CODE_KEY]: SUCCESS,
            [MESSAGE_KEY]: SUCCESS_DESC,
            [RESULT_KEY]: res
        }
        ctx.status = 200
    }
    async delete() {
        const {
            ctx,
            service
        } = this
        const res = await service.kanban.chart.delete(ctx.query)
        ctx.body = {
            [CODE_KEY]: SUCCESS,
            [MESSAGE_KEY]: SUCCESS_DESC,
            [RESULT_KEY]: res
        }

    }
    async deleteAll() {
        const {
            ctx,
            service
        } = this
        const res = await service.kanban.chart.deleteAll(ctx.query)
        ctx.body = {
            [CODE_KEY]: SUCCESS,
            [MESSAGE_KEY]: SUCCESS_DESC,
            [RESULT_KEY]: res
        }

    }

    async datasource() {
        const {
            ctx,
            service
        } = this;

        const res = await service.kanban.chart.datasource();
        ctx.body = {
            [CODE_KEY]: SUCCESS,
            [MESSAGE_KEY]: SUCCESS_DESC,
            [RESULT_KEY]: res,
        };
    }

    async executeSql() {
        const {
            ctx,
            service,
        } = this;

        let query = ctx.request.body;

        if (query.config && query.id && query.sql) {
            query.config = JSON.parse(query.config);
            let res = await service.common.getDataBySql(query);
            ctx.body = {
                [CODE_KEY]: SUCCESS,
                [MESSAGE_KEY]: SUCCESS_DESC,
                [RESULT_KEY]: res,
            };
        }


    }

    async getOption() {
        const {
            ctx,
            service
        } = this;
        const res = await service.kanban.chart.getOption(ctx.request.body);
        ctx.body = {
            [CODE_KEY]: SUCCESS,
            [MESSAGE_KEY]: SUCCESS_DESC,
            [RESULT_KEY]: res,
        };
    }

    async reFleshData() {
        const {
            ctx,
            service
        } = this;
		let query = ctx.query;
		let spider = new Spider({pageSize:query.pageNumber?query.pageNumber:1000});
		await spider.run(function () {});
		ctx.body = {
			[CODE_KEY]: SUCCESS,
			[MESSAGE_KEY]: SUCCESS_DESC,
			[RESULT_KEY]: '成功了',
		};

    }
}

module.exports = ChartController;
