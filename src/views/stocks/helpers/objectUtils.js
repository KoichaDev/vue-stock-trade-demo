export const convertObjectToArray = (object = {}) => {
    return object.reduce(
        (acc, [key, value]) => ({ ...acc, [key]: value }),
        {}
    );
}

export const filterOutEnteredValueZeroObject = (object = {}) => {
    return Object.entries(object).filter(
        ([, value]) => value !== 0
    );
}