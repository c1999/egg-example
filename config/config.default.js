/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
// module.exports = appInfo => {
//   /**
//    * built-in config
//    * @type {Egg.EggAppConfig}
//    **/
//   const config = {};

//   // use for cookie sign key, should change to your own and keep security
//   config.keys = appInfo.name + '_1551410385035_4112';

//   // add your middleware config here
//   config.middleware = [];

//   // add your user config here
//   const userConfig = {
//     // myAppName: 'egg',
//   };

//   return {
//     ...config,
//     ...userConfig,
//   };
// };


module.exports = appInfo => {
  const config = {};

  // should change to your own
  config.keys = appInfo.name + '';

  // add your config here
  config.security = {
    csrf: {
      enable: false,
    },
  };

  config.mongoose = {
    client: {
      url: 'mongodb://127.0.0.1/zhujiaweiceshi',
      options: {},
    }
  };

  
  /* 
    中间件 存放在middleware目录下 如全局使用在配置文件中
    创建实例，如在某一个路由中使用可以在路由层创建实例，并
    使用
    
    中间件通用配置
    enable：控制中间件是否开启
    match：设置只有符合某些规则但请求才会经过这个中间件
    ignore：设置符合某些规则但请求不经过这个中间件
    但是！：match ignore 不能同时存在
  */
  config.middleware = ['forbidip']
  config.forbidip = {
    forbidips:[
      //'127.0.0.1'
    ],
    ignore:'/v1/users/getUser/:id'
  }

  config.jwt = {
    secret: "123456" //自己设置的值
  };
  return config;
};


