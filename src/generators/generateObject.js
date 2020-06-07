const { getDefaultConfiguration } = require('../utils');

const generateValue = require('./generateValue');

const generateObject = (configuration = getDefaultConfiguration('object')) => {
    const { fields } = configuration;
    const keys = Object.keys(fields);
    
    return {
		...Object.assign({}, ...keys.map((key) => {
			const { type, generatorType, value, range } = fields[key];

			return {
				[key]: generateValue({ type, generatorType, value, range }),
			};
        })),
        
	}
}

module.exports = generateObject;