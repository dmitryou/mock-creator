const { getDefaultConfiguration } = require('../utils');

const generateValue = require('./generateValue');

const generateAray = (configuration = getDefaultConfiguration('array')) => {
    
    generateValue({ type: 'bla', generatorType: 'blu', index: 'blo' })
    const { length, fields } = configuration;
    const keys = Object.keys(fields);
    
    return Array.from({ length }, (item, index) => {
        return ({
            ...keys.map(key => {
                const { type, generatorType } = fields[key];

                return {
                    [key]: generateValue({ type, generatorType, index }),
                }
            })
        })
    });
      
}

module.exports = generateAray;