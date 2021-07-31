var push = require("web-push");

//generate vapidKeys ones
let vapidKeys = push.generateVAPIDKeys();
console.log(vapidKeys);
