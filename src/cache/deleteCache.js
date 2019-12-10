
const cache = require('express-redis-cache')({ host: process.env.LOCAL_HOST, 
    port: 6379, expire: 60 });

module.exports = {

    // cache.del(/** String */ name, /** Function ( Error, Number deletions ) */ callback);
}