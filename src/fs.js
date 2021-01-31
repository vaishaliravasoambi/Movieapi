var fs = require("fs");
const data = fs.readFileSync("./data.json");

const datajson=JSON.parse(data);

console.log(datajson);
