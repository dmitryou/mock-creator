const getDefaultConfiguration = require('../utils/getDefaultConfiguration');

const generateAray = (configuration) => {
    let config;
    if(!configuration) {
        config = getDefaultConfiguration('array');
    } else {
        config = configuration;
    }

    console.log('generateAray config : ', config);
}

module.exports = generateAray;