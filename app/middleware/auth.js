/* 中间件如果只在某个路由 就在路由文件创建实例 如果全局使用在配置文件中配置*/
module.exports = (options, app) => {
    return async function WebAuthentication(ctx, next) {
        console.log(options);  //config.default.js中定义的参数
        console.log(new Date());
        await next();
    };
};