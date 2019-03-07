'use strict';
const Service = require('egg').Service;

class UserService extends Service {

  async createUsers(users) {

    //   const user = new this.ctx.model.Users({
    //     username:"aaa",
    //     password:"bbbb"
    // })
    // user.save();
    console.log(JSON.stringify(users));
    return `创建用户${users}`;
  }

  async deleteUsers(usersId) {
    return `删除用户${usersId}`;
  }

  async updateUsers(usersId) {
    return `更新用户${usersId}`;
  }

  async showUsers(usersId) {

  
    if(usersId) {
        let userToken = {
            name: usersId
        }
        const token = this.app.jwt.sign(userToken, this.app.config.jwt.secret, {expiresIn: '1h'})  //token签名 有效期为1小时
        return  {
            message: '获取token成功',
            code: 1,
            token
        }
    } else {
        return {
            message: '参数错误',
            code: -1
        }
      }

	}
    
  

  async indexUser() {
    /* 实现重定向 */
    this.ctx.redirect('/v1/users/getUser/:id')
    return '查看所有用户';
  }

  async new() {
    return 'new';
  }

  async edit(usersId) {
    return `修改用户${usersId}`;
  }

  async getUser(usersId) {
    const msg = this.ctx.helper.foo();
    //const msg2 = this.ctx.app.helper.foo();

    //普通查询
    //let test = await this.app.model.Users.find({ "username": "aaa" });
    //聚合查询
    let test = await this.app.model.Users.aggregate([{$match:{"username": "aaa"}}])
    console.log(test);
    return `自定义方法${usersId} ${msg} `;
  }

  async getContent() {
    return {content: 'content11',}
  }
}
module.exports = UserService;
