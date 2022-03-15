const openAPI = require('../dist/index');
debugger
openAPI.generateService({
  schemaPath: `${__dirname}/internal/oneapi.json`,
  serversPath: './servers',
  mockFolder: './mock'
});
