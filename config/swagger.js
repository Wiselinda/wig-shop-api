const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Wig Store API',
      version: '1.0.0',
      description: 'API documentation for the Wig Store app',
    },
    servers: [
      {
        url: 'http://localhost:3000', // Change if hosted
        description: 'Local server',
      },
    ],
  },
  apis: ['./routes/*.js'], // Where your route docs are
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;

