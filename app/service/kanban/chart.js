/**
 * Created by fight on 2018/7/30.
 */
'use strict'

const Service = require('egg').Service;

class ChartService extends Service {

    async query (query) {
        const res = await this.app.mysql.get('vs').get('kanban_case_chart', { id: query.id });
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
        const res = await this.app.mysql.get('vs').query('select * from kanban_case_chart');
        return res
    }

    async create(query) {
        const res = await this.app.mysql.get('vs').insert('kanban_case_chart', query);
        return res
    }

    async createAll(query) {

        // let {parentId,positionList} = query;
        // positionList.forEach(function (item,index) {
        //     item.parentId = parentId;
        // })
        const res = await this.app.mysql.get('vs').insert('kanban_case_chart', query);
        return res
    }




    async update(q) {
        const query =q;
        query.option = JSON.stringify(query.option);
        const options = {
            where: {
                parentId: query.parentId,
                position: query.position
            }
        };
        const res = await this.app.mysql.get('vs').update('kanban_case_chart', query, options);
        return res
    }

    async delete(query) {
        const options = {
            id: query.id
        };
        const res = await this.app.mysql.get('vs').delete('kanban_case_chart',options);
        return res
    }
    async deleteAll(query) {
        const options = {
            parentId: query.parentId
        };
        const res = await this.app.mysql.get('vs').delete('kanban_case_chart',options);
        return res
    }

    async datasource (req) {
        const res = await this.app.mysql.get('vs').query('select * from data_source where type = \'database\'');
        return res
    }
    async executeSql (query) {
        let {sourceId, chartSql} = query;
        let res;
        let sequelize = this.app.datasource[sourceId];

        await sequelize.query(chartSql).spread((results, metadata) => {
            res = results;
        });

        return res
    }


    async getOption (query) {

        const res = await this.app.mysql.get('vs').get('kanban_case_chart', { parentId: query.parentId , position: query.position});
        return res
    }
}

module.exports = ChartService;
