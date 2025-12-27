const generateUsernameSuggetions = (name, interest) => {
    return [
        `${name.toLowerCase()}_dev`,
        `${interest.split(" ")[0]}_${name.toLowerCase()}`,
        `${name.toLowerCase()}_codes`
    ];
};

const generateHelpText = (questions) =>{
    return `Here is some guidence related to: ${questions}`
}

module.exports = {generateUsernameSuggetions, generateHelpText};