'use strict';

// had enabled by egg
// exports.static = true;
// exports.mongoose = {
//   enable: true,
//   package: 'egg-mongoose',
// }
// exports.sequelize = {
//   enable: true,
//   package: 'egg-sequelize'
// }



exports.mysql = {
    enable: true,
    package: 'egg-mysql',
};


//路由命名空间
exports.routerPlus = {
    enable: true,
    package: 'egg-router-plus',
};


//跨域
exports.cors = {
    enable: true,
    package: 'egg-cors',
};
