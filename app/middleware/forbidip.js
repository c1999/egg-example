module.exports = (options,app)=>{
    return async function forbidip(ctx,next){
        let forbidips = options.forbidips;
        let clientIp = ctx.request.ip;
        let hasIp = forbidips.some(val =>{
            if(val == clientIp){
                return true
            }
        })
        if(hasIp){
            ctx.statis = 403;
            ctx.body = '您的ip已被屏蔽'
        }else{
            await next()
        }
    }
}