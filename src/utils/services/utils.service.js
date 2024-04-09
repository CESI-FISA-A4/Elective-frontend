export const camelCaseToSentence = (input) => {
    return input.replace(/([A-Z])/g, ' $1').replace(/^./, function(str){ return str.toUpperCase(); }).replace(/^(.)/, function(str){ return str.toUpperCase(); });
}