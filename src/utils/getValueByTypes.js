const getValueByTypes = (type) => {
    console.log('type', type);

    if (type === configTypes.ARRAY) {
        return defaultArrayConfig;
    } else if (type === configTypes.OBJECT) {
        return defaultObjectConfig;
    }
    return defaultValueConfig;
}

module.exports = getValueByTypes;