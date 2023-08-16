const pgConfig = {
    development: {
        client: 'pg',
        connection: {
            //TODO: jalar desde local ENV
            host: 'dpg-cjefsv6e546c739qq6ng-a.oregon-postgres.render.com',
            user: 'paul',
            password: '5JbepXDGfTd4vQQrToACmmzYIoIA5Fh3',
            database: 'auxiliatron_csle',
            ssl: { rejectUnauthorized: false }
        },
       
    }
}

module.exports = pgConfig;