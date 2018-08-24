'use strict';

module.exports = appInfo => {
    const config = exports = {};

    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + '_1531189538772_7396';

    // add your config here
    config.middleware = ['errorHandler'];

    config.mysql = {
        clients: {
            // clientId, 获取client实例，需要通过 app.mysql.get('clientId') 获取
            vs: {
                database: 'spiderdata',
                host: '101.132.122.2',
                port: '3306',
                user: 'seven',
                password: '123456',
            },
        },
        // 所有数据库配置的默认值
        default: {

        },
        // 是否加载到 app 上，默认开启
        app: true,
        // 是否加载到 agent 上，默认关闭
        agent: false,
    };

    config.security = {
        csrf: {
            enable: false,
            ignoreJSON: true,
        },
        // domainWhiteList: ['127.0.0.1:810' ,'localhost:810','192.168.88.213:810','192.168.88.213:802' ]    //设置跨域的白名单
    };

    config.cors = {
        origin: () => '*',            //开启了这个之后，所有的 ip都可以访问， 所以解决了跨域的问题。
        credentials:true,
    };
    return config;
};
