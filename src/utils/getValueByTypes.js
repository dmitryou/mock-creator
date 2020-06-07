const {
    generatorTypes,
    valueTypes,
    configTypes,
} = require('../types');

const getValueByTypes = ({ type, generatorType, index, range, value }) => {    
    switch (type) {
        case valueTypes.NUMBER:
            return generateNumber({ generatorType, index, range, value });
        case valueTypes.STRING:
            return generateString({ generatorType, index, range, value });
        case valueTypes.DATE:
            return generateDate({ generatorType, index, range, value });
        default:
            return generateNumber({ generatorType, index, range, value });
    }
}


const generateNumber = ({ generatorType, index, range, value }) => {
    switch (generatorType) {
        case generatorTypes.RANDOM:
            return getRandomInt(1, 100000);
        case generatorTypes.RANGE:
            return getRandomInt(range[0], range[1]);
        case generatorTypes.STATIC:
            return value;
        case generatorTypes.UNIQ:
            return index;
        default:
    }
}

/**
 * Returns a random number between min (inclusive) and max (exclusive)
 */
const getRandomArbitrary = (min, max) => {
    return Math.random() * (max - min) + min;
}

/**
 * Returns a random integer between min (inclusive) and max (inclusive).
 * The value is no lower than min (or the next integer greater than min
 * if min isn't an integer) and no greater than max (or the next integer
 * lower than max if max isn't an integer).
 * Using Math.round() will give you a non-uniform distribution!
 */
const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

module.exports = getValueByTypes;