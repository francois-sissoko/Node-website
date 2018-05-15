var censor = require("censorify");
console.log(censor.getCensoredWord());
console.log(censor.censor("Some very sad, bad and mad text."));
censor.addCensoredWord("gloomy");
console.log(censor.getCensoredWord());
console.log(censor.censor("A very gloomy day."));