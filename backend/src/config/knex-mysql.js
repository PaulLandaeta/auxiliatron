const mysqlConfig = {
    development: {
        client: 'mysql',
        connection: {
            //TODO: jalar desde local ENV
            host: 'localhost',
            user: 'root',
            password: 'root',
            database: 'auxiliatron'
        }
    }
}

module.exports = mysqlConfig;