'use strict';

const Controller = require('./base')

/**
 * 根据参数连接数据库获取数据
 * GET
 * @param{String}id
 * @param{Object}config
 * {"host": "192.168.88.43",
    "name": "1234",
    "port": 1433,
    "driver": "com.microsoft.sqlserver.jdbc.SQLServerDriver",
    "params": "",
    "dialect": "mssql",
    "database": "dataSource",
    "password": "1234",
    "username": "sa"}
 * @param{String}sql
 * SELECT top 10 title,width  from  column_info_byuser WHERE width > 0 
 * 
 */
class CommonController extends Controller {
    async getDataBySql() {
        const {
            service,
            ctx
        } = this
        if (ctx.query.config && ctx.query.id && ctx.query.sql) {
            ctx.query.config = JSON.parse(ctx.query.config)
            let res = await service.common.getDataBySql(ctx.query)
            this.success(res)
        } else {
            this.error()
        }
    }
}

module.exports = CommonController;
