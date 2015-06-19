var clone = require('clone');

function transformBoolean (value, options) {

    if (options.trues.indexOf(value) > -1) {
        return true;
    } 

    if (options.falses.indexOf(value) > -1) {
        return false;
    }
}

function transform(object, boolMap, options) {
    var booleanPicker = this,
        result;
    
    if (object === null || typeof object !=='object') {
         return object;
    }

    if (!options) {
        options = {};
    }

    options.trues = options.trues || [];
    options.falses = options.falses || [];

    result = clone(object)

    if (!options.trues.length && !options.falses.length) {
        return result;
    }

    for(var key in boolMap){
        if(!(key in result)){
            continue;
        }

        if(boolMap[key] === true){

            result[key] = transformBoolean(result[key], options);
        
        } else if (Array.isArray(boolMap[key])) {
            
            if (Array.isArray(result[key])) {
                
                result[key] = result[key].map(function(item){
                    return transform(item, boolMap[key][0], options)
                });
            
            }
        } else if(typeof boolMap[key] === 'object'){
            
            result[key] = transform(result[key], boolMap[key], options);
        }
    }

    return result;
}


module.exports = transform;