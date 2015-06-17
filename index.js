var defaultTrues = ['yes', 'true'],
    defaultFalses = ['no', 'false'],
    exclusions = [];


function transform(obj) {
    if (obj === null || typeof obj !=='object') {
         return obj;
    }

    for (var key in obj) {
        if (exclusions.indexOf(key) > -1) {
            continue;
        }

        if (typeof obj[key] === 'object') {
            transform(obj[key]);
        }

        if (defaultTrues.indexOf(obj[key]) > -1) {
            obj[key] = true;
            continue;
        } 

        if (defaultFalses.indexOf(obj[key]) > -1) {
            obj[key] = false;
            continue;
        }
    }

    return obj;
}

function booleanTransform(options) {

    if (!options) {
        return transform;
    }
    
    if (Array.isArray(options.trueValues)){
        defaultTrues = defaultTrues.concat(options.trueValues);
    }

    if (Array.isArray(options.falseValues)) {
        defaultFalses = defaultFalses.concat(options.falseValues);
    }

    if (Array.isArray(options.exclusions)) {
        exclusions = exclusions.concat(options.exclusions);
    }

    return transform
}

module.exports = booleanTransform;