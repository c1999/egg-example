
    定时任务都统一存放在app/schedule目录下，每一个文件都是一个独立
    都定时任务，可以配置定时任务都属性和要执行都方法。

    定时方式：
    定时任务可以指定interval或者cron两种不同都方式

    module.exports = {
    schedule: {
    // 每 10 秒执行一次
    interval: '10s',
    },
    };



corn：



*    *    *    *    *    *
┬    ┬    ┬    ┬    ┬    ┬
│    │    │    │    │    |
│    │    │    │    │    └ day of week (0 - 7) (0 or 7 is Sun)
│    │    │    │    └───── month (1 - 12)
│    │    │    └────────── day of month (1 - 31)
│    │    └─────────────── hour (0 - 23)
│    └──────────────────── minute (0 - 59)
└───────────────────────── second (0 - 59, optional)



    module.exports = {
    schedule: {
    // 每三小时准点执行一次
    cron: '0 0 */3 * * *',
    },
    };