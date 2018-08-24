'use strict'

const Service = require('egg').Service

class UsersService extends Service {
    async create(req) {
        const res = await this.ctx.model.Test.create(req)
        return res
    }
    //获取list型
    async getList(key, start, end) {
        let data = await this.app.redis.lrange(key, start, end);
        return data
    }
}

module.exports = UsersService
