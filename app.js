// const Sequelize = require('sequelize');
// const Logger = require('egg-logger').Logger;
// const logger = new Logger();
// module.exports = app => {
//     app.beforeStart(async () => {
//         await app.model.sync({
//             // force: true//若表存在，会删除重建
//         });

//         const ctx = app.createAnonymousContext();
//         const datasource =  await ctx.service.dataSource.list();

//         app.datasource = {};
//         datasource.forEach(async function (source,index) {             //动态创建数据源  并挂在app.datasource上面
//             const config = JSON.parse(source.config);
//             config.user = config.username;
//             config.logging=logger;
//             try {
//                 app.datasource[source.sourceId] = new Sequelize(config);
//             }catch (e){
//                 console.log(e);
//             }
//         });


//     });
// };
