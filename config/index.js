const path = require('path')

module.exports = {
  db: {
    database: process.env.DATABASE || 'user',
    username: 'root',
    password: '123456',
    options: {
      host: 'localhost',
      dialect: 'sqlite',
      storage: path.resolve(__dirname, '../database/user.sqlite'),
      define: {
        underscored: true,
        paranoid: true
      }
    }
  },
  token: {
    secretOrPrivateKey: 'happy',
    options: {
      expiresIn: '24h'
    }
  }
}
