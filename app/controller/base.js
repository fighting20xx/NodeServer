'use strict';

const Controller = require('egg').Controller;
const { CODE_KEY,MESSAGE_KEY,RESULT_KEY } = require('../dim/ajaxStruct');
const statusCode = require('../dim/StatusCode');

class BaseController extends Controller {
    success(res) {
        this.ctx.body = {
            [CODE_KEY]: statusCode.SUCCESS,
            [MESSAGE_KEY]: statusCode.SUCCESS_DESC,
            [RESULT_KEY]: res,
        }
        this.ctx.status = 200
    }
    error() {
        this.ctx.body = {
            [CODE_KEY]: statusCode.HTTP_API_PARAM_ERROR,
            [MESSAGE_KEY]: statusCode.HTTP_API_PARAM_ERROR_DESC,
            [RESULT_KEY]: null,
        }
        this.ctx.status = 200
    }
}

module.exports = BaseController;
