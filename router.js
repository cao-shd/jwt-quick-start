const UserController = require('./controller/UserController')
// token 认证策略
const AuthenticatePolicy = require('./policy/AuthenticatePolicy')

module.exports = (app) => {
  // 以下接口可直接访问 不需 token 认证
  // 用户注册
  app.post('/user', UserController.register)
  // 用户登录
  app.post('/user/login', UserController.login)

  // 以下接口需要token认证
  // 取得指定ID用户
  app.get('/user/:id', AuthenticatePolicy.isValidToken, UserController.getUserById)
  // 取得全部用户
  app.get('/users', AuthenticatePolicy.isValidToken, UserController.getAllUser)
  // 更新用户
  app.put('/user/:id', AuthenticatePolicy.isValidToken, UserController.update)
  // 删除用户
  app.delete('/user/:id', AuthenticatePolicy.isValidToken, UserController.delete)
}
