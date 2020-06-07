const {
    generatorTypes,
    valueTypes,
    configTypes,
} = require('../types');

/**
 * Following config will return array with 50 objects structed as:
 *   {
 *      id: 1,
 *      name: "Matan",
 *      age: 23, (number between 20-30)
 *      birthDate: new Date(),
 *      luckyNumber: 777, ( any random number)
 *   }
 */
const defaultArrayConfig = {
    length: 50,
    fields: [
        {
            id: {
                type: valueTypes.NUMBER,
                generatorType: generatorTypes.UNIQ,
            }
        },
        {
            name: {
                type: valueTypes.STRING,
                generatorType: generatorTypes.STATIC,
                value: 'Matan',
            }
        },
        {
            age: {
                type: valueTypes.NUMBER,
                generatorType: generatorTypes.RANGE,
                range: [20, 30],
            },
        },
        {
            birthDate: {
                type: valueTypes.DATE,
                generatorType: generatorTypes.RANDOM,
            },
        },
        {
            luckyNumber: {
                type: valueTypes.NUMBER,
                generatorType: generatorTypes.RANDOM,
            },
        },
    ]
}


/**
 * Following config will return object structed as:
 *   {
 *      id: 1,
 *      name: "Matan",
 *      age: 23, (number between 20-30)
 *      birthDate: new Date(),
 *      luckyNumber: 777, ( any random number)
 *   }
 */
const defaultObjectConfig = {
    fields: [
        {
            id: {
                type: valueTypes.NUMBER,
                generatorType: generatorTypes.UNIQ,
            }
        },
        {
            name: {
                type: valueTypes.STRING,
                generatorType: generatorTypes.STATIC,
                value: 'Matan',
            }
        },
        {
            age: {
                type: valueTypes.NUMBER,
                generatorType: generatorTypes.RANGE,
                range: [20, 30],
            },
        },
        {
            birthDate: {
                type: valueTypes.DATE,
                generatorType: generatorTypes.RANDOM,
            },
        },
        {
            luckyNumber: {
                type: valueTypes.NUMBER,
                generatorType: generatorTypes.RANDOM,
            },
        },
    ]
}

const defaultValueConfig = {
    luckyNumber: {
        type: valueTypes.NUMBER,
        generatorType: generatorTypes.RANDOM,
    },
}


const getDefaultConfiguration = (type) => {
    console.log('type', type);

    if (type === configTypes.ARRAY) {
        return defaultArrayConfig;
    } else if (type === configTypes.OBJECT) {
        return defaultObjectConfig;
    }
    return defaultValueConfig;
}

module.exports = getDefaultConfiguration;