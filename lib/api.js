var rp = require('request-promise');

const BASE_URL = "https://tempus.xyz/api/";
const REQUEST_OPTIONS = {
    method: 'GET', 
    headers: {
        'Accept': 'application/json'
    },
    json: true
}

async function tempus_api_request(url, options={}) {
    return await rp({
        ...REQUEST_OPTIONS, 
        uri: BASE_URL + url,
        ...options
    });
}


module.exports = {
    tempus_api_request
}