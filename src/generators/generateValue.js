const getValueByTypes = require('../utils/getValueByTypes')

const generateValue = ({ type, generatorType, index, value, range }) => {
    return getValueByTypes({ type, generatorType, index, value, range });
}

module.exports = generateValue;