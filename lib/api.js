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
    var options = {
        ...REQUEST_OPTIONS, 
        uri: BASE_URL + url,
        ...options
    };
    console.log(options);
    return await rp(options);
}


module.exports = {
    tempus_api_request
}