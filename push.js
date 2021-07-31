var push = require("web-push");

//generate vapidKeys ones
//let vapidKeys = push.generateVAPIDKeys();
//console.log(vapidKeys);

let vapidKeys ={
  publicKey: 'BMO7_S-89fjTdrnJROByPpk1FTxhOwMQLNPPd3PGGSnkXuegDnwqzwuP7IqgyWCzW7D_uhhZZAlQcEmQuVKCUT0',
  privateKey: '1ZIrz5LC10RGqDzaoGnhB2sekZa_TSga8x669Iz26KY'
};

push.setVapidDetails(
  "mailto:test@gmail.com",
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

let sub = {
  endpoint:
    "https://fcm.googleapis.com/fcm/send/ck4NtNqfi4o:APA91bEETMNxSU82fjlJmq3KldDKToyNWej_6JqXfBS1VR96U971pPsXJcBKk7D9EQHHRDDvDP6KxGLXtKHLtEk1Zm4FxDlFSBF9mvvbY9o6t_PATNgBLNuiFv5jelrB3MxZOA9xN208",
  expirationTime: null,
  keys: {
    p256dh:
      "BLyEuClgX5TKAooq8s6SwNuQJ_ruWC30TVyTR5jLFPDEm4pSWx85bBQft21muethRC0rFhq_cGeANqFgemidgkM",
    auth: "2VyBEEZc9Si5YYUZo8k3YA",
  },
};

// let sub = {
//   endpoint:
//     "https://fcm.googleapis.com/fcm/send/cc2gzTY11Cc:APA91bGZCH1S2ch32NCpXDaVabyKw-DKBN8Ij454DQnWKUud5hgTS1_lj0RyNSJvFigXPONFcR4Rt758zYCf9FzFR01zoqeYQRKykYg9ExCkTksuE3kZuKU1veAqCOq-mXTH3ktEEXXU",
//   expirationTime: null,
//   keys: {
//     p256dh:
//       "BLwsns_yn2do2PAZDUBAPeIVvxK2l_tuiXNrtIjjnm5xA-vWgnln7KHtH5xGxBAyoX-cBXQODWJfZm6cLq2X4kk",
//     auth: "gxkOzjZz_YgXu7DbZdnMxw",
//   },
// };

push.sendNotification(sub, "test message");
