'use strict';
const { Controller } = require('egg');
class UsersController extends Controller {

  async create() {
    /* 可以接受表单数据 */
    const { ctx, service } = this;
    const users = ctx.request.body;
    const result = await service.users.createUsers(users);
    ctx.logger.info('info 日志');
    ctx.body = result;
  }

  async destroy() {
    /* 可以接受表单数据 */
    const { ctx, service } = this;
    const usersId = ctx.params.id;
    const result = await service.users.deleteUsers(usersId);
    ctx.body = result;
  }

  async update() {
    /* 可以接受表单数据 */
    const { ctx, service } = this;
    const usersId = ctx.params.id;
    const result = await service.users.updateUsers(usersId);
    ctx.body = result;
  }

  async show() {
    /* 可以接受表单数据 */
    const { ctx, service } = this;
    const usersId = ctx.params.id;
    const result = await service.users.showUsers(usersId);
    ctx.body = result;
  }

  async index() {
    const { ctx, service } = this;
    const result = await service.users.indexUser();
    ctx.body = result;
  }

  async new() {
    const { ctx, service } = this;
    const result = await service.users.new();
    ctx.body = result;
  }

  async edit() {
    const { ctx, service } = this;
    const usersId = ctx.params.id;
    const result = await service.users.edit(usersId);
    
    ctx.body = result;

  }

  async getUser() {
    const { ctx } = this;
    const usersId = ctx.params.id;
    const result = await this.ctx.service.users.getUser(usersId);
    ctx.body = result;
  }
}

module.exports = UsersController;
