
const defaultArrayConfig = {
    length: 50,
    fields: [
        {
            id: {
                type: 'number',
                generatorType: 'uniq',
            }
        },
        {
            name: {
                type: 'string',
                generatorType: 'static',
                value: 'Matan',
            }
        },
        {
            age: {
                type: 'number',
                generatorType: 'random',
            },
        },
        {
            birthDate: {
                type: 'date',
                generatorType: 'random',
            },
        },
    ]
}

//   [ { id: 1, name: "Matan", age: 23, birthDate: new Date()}  ]

const defaultObjectConfig = {
    fields: [
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
                value: 'Dima'
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

    if (type === 'array') {
        return defaultArrayConfig;
    }
    return defaultObjectConfig;
}

module.exports = getDefaultConfiguration;