const generateObject = (configuration) => {
    const { fields } = configuration;
    const keys = Object.keys(fields);
    
    return {
		...Object.assign({}, ...keys.map((key) => {
			const { type, generatorType, value, range } = fields[key];

			return {
				[key]: generateValue({ type, generatorType, index, value, range }),
			};
        })),
        
	}
}

module.exports = generateObject;