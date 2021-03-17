module.exports = ({ env }) => {
  return {
    defaultConnection: "default",
    connections: {
      default: {
        connector: "bookshelf",
        settings: {
          client: "postgres",
          host: "127.0.0.1",
          port: "5432",
          database: "ecommerce",
          username: "postgres",
          password: "postgres",
        },
        options: {
          useNullAsDefault: true,
        },
      },
    },
  };
};
