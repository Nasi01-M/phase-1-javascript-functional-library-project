const myEach = (collection, callback) => {
    if (isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            callback(collection[i]);
        }
    } else {
        for (const key in collection) {
            callback(collection[key]);
        }
    }
    return collection;
};

const myMap = (collection, callback) => {
    const result = [];
    myEach(collection, function (element) {
        result.push(callback(element));
    });
    return result;
};

const myReduce = (collection, callback, acc) => {
    if (acc === undefined) {
        acc = isArray(collection) ? collection[0] : getObjectValues(collection)[0];
        if (acc === undefined) {
            throw new Error("Reduce of empty array with no initial value");
        }
        collection = isArray(collection) ? collection.slice(1) : getObjectValues(collection).slice(1);
    }

    myEach(collection, function (element) {
        acc = callback(acc, element, collection);
    });

    return acc;
};

const myFind = (collection, predicate) => {
    let result;
    for (const element of collection) {
        if (predicate(element)) {
            result = element;
            break;  
        }
    }
    return result;
};

const myFilter = (collection, predicate) => {
    const result = [];
    myEach(collection, function (element) {
        if (predicate(element)) {
            result.push(element);
        }
    });
    return result;
};

const mySize = (collection) => {
    return isArray(collection) ? collection.length : getObjectValues(collection).length;
};

const myFirst = (array, n) => {
    return n === undefined ? array[0] : array.slice(0, n);
};

const myLast = (array, n) => {
    return n === undefined ? array[array.length - 1] : array.slice(-n);
};

const myKeys = (object) => {
    return Object.keys(object);
};

const myValues = (object) => {
    return getObjectValues(object);
};

// check if a variable is an array
const isArray = (variable) => {
    return Array.isArray(variable);
};

// get object values
const getObjectValues = (obj) => {
    return Object.keys(obj).map(key => obj[key]);
};

module.exports = {
    myEach,
    myMap,
    myReduce,
    myFind,
    myFilter,
    mySize,
    myFirst,
    myLast,
    myKeys,
    myValues,
};
