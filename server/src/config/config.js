const path = require('path')

module.exports = {
    port: process.env.PORT || 8081,
    db: {
        database: process.env.DB_NAME || 'tracker',
        user: process.env.DB_USER || 'tracker',
        password: process.env.DB_PASS || 'tracker',
        options: {
            dialect: process.env.DIALECT || 'sqlite',
            host: process.env.HOST || 'sqlite',
            storage: path.resolve(__dirname,'../../tracker.sqlite')
        }
    },
    authentication: {
        jwtSecret: process.env.JWT_SECRET || 'secret'
    }
}