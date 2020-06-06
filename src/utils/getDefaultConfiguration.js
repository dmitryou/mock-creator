
const defaultArrayConfig = {
    length: 50,
    columns: [
        {
            id: {
                type: 'string',
                generatorType: 'inc',
            }
        },
        {
            name: {
                type: 'string',
                generatorType: 'static',
            }
        },
        {
            age: {
                type: 'number',
                generatorType: 'random',
            }
        },
        {
            birthDate: {
                type: 'date',
                generatorType: 'random',
            }
        },
    ]
}

const defaultObjectConfig = {
    columns: [
        {
            id: {
                type: 'string',
                generatorType: 'static',
            }
        },
        {
            name: {
                type: 'string',
                generatorType: 'static',
            }
        },
        {
            age: {
                type: 'number',
                generatorType: 'random',
            }
        },
        {
            birthDate: {
                type: 'date',
                generatorType: 'random',
            }
        },
    ]
}


const getDefaultConfiguration = (type) => {
    console.log('type', type);
    
    if(type === 'array') {
        return defaultArrayConfig;
    }
    return defaultObjectConfig;
}

module.exports = getDefaultConfiguration;