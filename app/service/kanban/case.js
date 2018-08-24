/**
 * Created by fight on 2018/7/30.
 */
'use strict'

const Service = require('egg').Service;

class CaseService extends Service {

    async query (query) {
        const res = await this.app.mysql.get('vs').get('kanban_case', { id: query.id });
        return res
    }

    async list (req) {

        const row = {
            name: 'fengmk2',
            otherField: 'other field value',    // any other fields u want to update
            modifiedAt: '123123213', // `now()` on db server
        };

        const options = {
            where: {
                id: 1
            }
        };
        const list = await this.app.mysql.get('vs').query('select * from kanban_case');
        const count = await this.app.mysql.get('vs').query('select count(*) from kanban_case');
        return {list:list,count:count}
    }

    async create(query) {
        // console.log(req.query);
        const res = await this.app.mysql.get('vs').insert('kanban_case', query);
        return res
    }




    async update(query) {

        const options = {
            where: {
                id: query.id
            }
        };
        const res = await this.app.mysql.get('vs').update('kanban_case', query, options);
        return res
    }

    async delete(query) {
        const options = {
            id: query.id
        };
        const res = await this.app.mysql.get('vs').delete('kanban_case',options);
        return res
    }

}

module.exports = CaseService;
