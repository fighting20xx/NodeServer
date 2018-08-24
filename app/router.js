'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
    const V1Router = app.router.namespace('/api/v1/');
    const { router, controller } = app;


    router.get('/', controller.home.index);



    V1Router.resources('users', controller.users);
    V1Router.resources('test', controller.test);
    V1Router.get('data/sql',controller.common.getDataBySql)

    /*
     * 大屏看板 预案管理
     *
     * */
    V1Router.all('kanban/case/query', controller.kanban.case.query);   //按照id查询
    V1Router.all('kanban/case/list', controller.kanban.case.list);     //获取所有
    V1Router.all('kanban/case/create', controller.kanban.case.create);  //新增
    V1Router.all('kanban/case/update', controller.kanban.case.update);  //更新
    V1Router.all('kanban/case/delete', controller.kanban.case.delete);   //删除  /*

    /* 大屏看板 预案管理 图形表
     *
     * */
    V1Router.all('kanban/chart/query', controller.kanban.chart.query);   //按照id查询
    V1Router.all('kanban/chart/getOption', controller.kanban.chart.getOption);   //按照父id和位置 查询 chart信息
    V1Router.all('kanban/chart/list', controller.kanban.chart.list);     //获取所有
    V1Router.all('kanban/chart/create', controller.kanban.chart.create);  //新增
    V1Router.all('kanban/chart/createAll', controller.kanban.chart.createAll);  //新增
    V1Router.all('kanban/chart/update', controller.kanban.chart.update);  //更新
    V1Router.all('kanban/chart/delete', controller.kanban.chart.delete);   //删除
    V1Router.all('kanban/chart/deleteAll', controller.kanban.chart.deleteAll);   //删除所属的所有chart
    V1Router.all('kanban/chart/datasource', controller.kanban.chart.datasource);     //获取数据源
    V1Router.all('kanban/chart/executeSql', controller.kanban.chart.executeSql);     //执行Sql

};
