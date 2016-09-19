// Update with your config settings.

module.exports = {

  development: {
    client: 'postgresql',
    connection: 'postgres://localhost/valerie_adv',
    migrations: {
      directory:'./db/migrations'
    },
    seeds: {
      directory: './db/seeds'
    }
  }
};
