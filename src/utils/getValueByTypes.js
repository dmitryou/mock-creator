const {
    generatorTypes,
    valueTypes,
    configTypes,
} = require('../types');

const getRandomDateInRange = (start, end) => {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

const getValueByTypes = ({ type, generatorType, index, range, value, oneOf }) => {
    switch (type) {
        case valueTypes.STRING:
            return generateString({ generatorType, index, range, value, oneOf });
        case valueTypes.DATE:
            return generateDate({ generatorType, index, range, value, oneOf });
        case valueTypes.NUMBER:
        default:
            return generateNumber({ generatorType, index, range, value, oneOf });
    }
}

const generateString = ({ generatorType, index = 0, value, oneOf = [1] }) => {
    switch (generatorType) {
        case generatorTypes.RANDOM:
            return makeId(15);
        case generatorTypes.UNIQ:
            return index.toString();
        case generatorTypes.ONE_OF:
            return oneOf[getRandomInt(0, oneOf.length - 1)].toString();
        case generatorTypes.STATIC:
        default:
            return value;
    }
}

const generateNumber = ({ generatorType, index = 0, range, value, oneOf = [1] }) => {
    switch (generatorType) {
        case generatorTypes.RANDOM:
            return getRandomInt(1, 100000);
        case generatorTypes.RANGE:
            return getRandomInt(range[0], range[1]);
        case generatorTypes.UNIQ:
            return index;
        case generatorTypes.ONE_OF:
            return oneOf[getRandomInt(0, oneOf.length - 1)].toString();
        case generatorTypes.STATIC:
        default:
            return value;
    }
}

const generateDate = ({ generatorType, index = 0, range, value, oneOf = [1] }) => {
    switch (generatorType) {
        case generatorTypes.RANGE:
            let start = range[0];
            let end = range[1];

            if (isNaN(start.getTime())) {
                start = new Date();
            }

            if (isNaN(end.getTime())) {
                end = new Date();
            }

            return getRandomDateInRange(start, end);
        case generatorTypes.STATIC:
            if (isNaN(value.getTime())) {
                return new Date();
            }

            return value;
        case generatorTypes.UNIQ:
            const now = Math.round((new Date()).getTime() / 1000);
            return new Date(now + index * 60 * 60 * 24);
        case generatorTypes.ONE_OF:
            return oneOf[getRandomInt(0, oneOf.length - 1)];
        case generatorTypes.RANDOM:
        default:
            return getRandomDateInRange(new Date(2012, 0, 1), new Date(2022, 0, 1));
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

/**
 * Returns a random string in specified lenght
 */
const makeId = (length) => {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

module.exports = getValueByTypes;