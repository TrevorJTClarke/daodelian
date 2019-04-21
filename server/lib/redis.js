const _ = require('lodash');
const bluebird = require('bluebird');
const redis = require('redis');

bluebird.promisifyAll(redis);


// if you'd like to select database 3, instead of 0 (default), call
// client.select(3, function() { /* ... */ });
const client = redis.createClient();

client.on('error', (err) => {
  console.log(`Error ${err}`);
});

async function setKey(type, id, data) {
  return client.setAsync(`${type}:${id}`, JSON.stringify(data));
}
async function getKey(type, id) {
  const rawVal = await client.getAsync(`${type}:${id}`);
  return JSON.parse(rawVal);
}

async function getAllOfType(type) {
  const keys = await client.keysAsync(`${type}:*`);
  if (!keys.length) return [];
  const items = await client.mgetAsync(keys);
  return _.map(items, JSON.parse);
}

async function getIdsOfType(type, ids = []) {
  const keys = _.map(ids, (id) => `${type}:${id}`);
  if (!keys.length) return [];
  const items = await client.mgetAsync(keys);
  return _.map(items, JSON.parse);
}

module.exports = {
  client,
  getKey,
  setKey,
  getAllOfType,
  getIdsOfType,
};
