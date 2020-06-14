const { getDefaultConfiguration } = require('../utils');

const generateValue = require('./generateValue');

const generateArray = (configuration = getDefaultConfiguration('array')) => {
	const { length, fields } = configuration;
	const keys = Object.keys(fields);

	return Array.from({ length }, (item, index) => ({

		...Object.assign({}, ...keys.map((key) => {
			const { type, generatorType, value, range, oneOf } = fields[key];

			return {
				[key]: generateValue({ 
					type, 
					generatorType, 
					index, 
					value, 
					range,
					oneOf,
				 }),
			};
        })),
        
	}));
};

module.exports = generateArray;
