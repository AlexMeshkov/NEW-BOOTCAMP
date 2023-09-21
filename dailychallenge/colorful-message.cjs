const chalk = require('chalk');


function displayColorfulMessage(){
    const message = chalk.backgroundColorNames.green('This is a colorful message!');
    console.log(message);

}

module.exports = displayColorfulMessage;
