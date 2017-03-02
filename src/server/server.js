const app = require('./server-config.js');
const port = process.env.PORT || 8080;
const redis = require('redis');
const bluebird = require('bluebird');
bluebird.promisifyAll(redis.RedisClient.prototype);

const redisClient = redis.createClient();

const server = app.listen(port);

console.log('Server now listening on port ' + port);

module.exports = {'server': server,
									'redis': redisClient}