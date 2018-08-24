'use strict';

const Service = require('egg').Service;
const Sequelize = require('sequelize')
const dbObj = {}

class CommonService extends Service {
    async getDataBySql(query) {
        query.config.dialectOptions = {
            encrypt: false
        }
        let {
            database,
            username,
            password
        } = query.config
        if (!dbObj.hasOwnProperty(query.id)) {
            dbObj[query.id] = new Sequelize(database, username, password, query.config)
            dbObj[query.id]
                .authenticate()
                .then(() => {
                    console.log('Connection has been established successfully.');
                }).catch(err => {
                    console.error('Unable to connect to the database:', err);
                });
        }
        let result = await dbObj[query.id].query(query.sql, {
            type: Sequelize.QueryTypes.SELECT
        })
        return result
    }
}

module.exports = CommonService;
