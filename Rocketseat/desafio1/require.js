const getFlagValue = require("./export");

console.log(`Olá ${getFlagValue("--name")}. ${getFlagValue("--greeting")}}`);
