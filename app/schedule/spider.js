

module.exports = {
    schedule: {
      interval: '10m', // 1 分钟间隔
      type: 'all', // 指定所有的 worker 都需要执行
    },
    async task() {
      console.log('我是一个定时任务@_@')
    },
  };