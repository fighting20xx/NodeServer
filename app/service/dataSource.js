/**
 * Created by fight on 2018/7/30.
 */
'use strict'

const Service = require('egg').Service;

class dataSourceService extends Service {



    async list () {
        const res = await this.app.mysql.get('vs').query('select * from data_source where type =  \'database\'');
        return res
    }


}

module.exports = dataSourceService;
