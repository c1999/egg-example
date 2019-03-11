'use strict';

const Controller = require('egg').Controller;

class LodashController extends Controller {
  async chunk() {
    console.log('----------测试lodash-------')
  }
}

module.exports = LodashController;
