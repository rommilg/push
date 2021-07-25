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

let sub={"endpoint":"https://fcm.googleapis.com/fcm/send/feFVPtSYBf4:APA91bH9laJtL4g9aQysfBbKJvNEMrSUtKEXotqiwVu7ea_K42ci2ZmpZtLKybS92ELepbMsIBWWkRu7YfB_diL7OkYd8smKlyRqdfAg12lHwzPRIo_CdagxEok_1EVa5vzykdEwGge3","expirationTime":null,"keys":{"p256dh":"BGRRu2xC6juPIDwXCb-B5Nj1eQWN5ETGNJ7QjENkvmOrFqPPBiNX95Q3TXeUCKKq7V4ynpi7Lr0KbXEzAqje8ic","auth":"NlLTvxPOYrC6SwbUAR_Wvg"}};

push.sendNotification(sub,"test message"); 