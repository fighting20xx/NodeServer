'use strict'

const Service = require('egg').Service

class UsersService extends Service {
    async create(req) {
        const res = await this.ctx.model.Test.create(req)
        return res
    }
    async index() {
        const data = await this.ctx.model.Test.findAll()
        return data
    }
    async update(req) {
        const res = await this.ctx.model.Test.update({
            userName: req.userName,
        }, req)
        return res
    }
    async rawQuery(sentence) {
        const res = await this.ctx.model.query(sentence).spread((results, metadata) => {
            return results
        })
        console.log(res);
        return res
    }
    async destroyById(id) {
        const res = await this.ctx.model.Test.destroy({
            where: {
                id: id
            }
        })
        return res
    }
}

module.exports = UsersService
