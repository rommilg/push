var push = require("web-push");

//generate vapidKeys ones
//let vapidKeys = push.generateVAPIDKeys();
//console.log(vapidKeys);

let vapidKeys = {
  publicKey:
    "BEbMHS7sHTyj7fp3CMFbqfDIoAK6ySmLXvFbcW8o9AX9mJaQAaDKm2c-jbbamddVtELhAFsm3vkt-P3SitDh9FY",
  privateKey: "U2QivoP7ff1yhsq6adKV18qYiCez8VhJGKjHM-1zN48",
};

push.setVapidDetails(
  "mailto:test@gmail.com",
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

let sub{};

push.sendNotification(sub,"te"); 