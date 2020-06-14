const getValueByTypes = require('../utils/getValueByTypes')

const generateValue = ({ type, generatorType, index, value, range, oneOf }) => {
    return getValueByTypes({ type, generatorType, index, value, range, oneOf });
}

module.exports = generateValue;