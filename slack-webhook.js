// https://kubernetes.io/docs/tasks/inject-data-application/environment-variable-expose-pod-information/

var Slack = require('slack-node');
var moment = require('moment-timezone');

TIME_ZONE='America/Los_Angeles'

SLACK_WEBHOOK = process.env.SLACK_WEBHOOK || "NotReadFromEnv";
SLACK_CHANNEL = process.env.SLACK_CHANNEL || "NotReadFromEnv";
MY_NODE_NAME = process.env.MY_NODE_NAME || "NotReadFromEnv";
MY_POD_NAME = process.env.MY_POD_NAME || "NotReadFromEnv";
MY_POD_IP = process.env.MY_POD_IP || "NotReadFromEnv";
MY_POD_NAMESPACE = process.env.MY_POD_NAMESPACE || "NotReadFromEnv";
MY_TIME = moment().tz(TIME_ZONE).format();

console.log('The SLACK_CHANNEL is:', process.env.SLACK_CHANNEL);
// console.log('All vars:', process.env);
console.log('Time and Date:', moment().tz("America/Los_Angeles").format());
 
slack = new Slack();
slack.setWebhook(SLACK_WEBHOOK);
 
// slack.webhook({
//   channel: "@mpatters",
//   username: "webhookbot",
//   text: "This is posted to @mpatters and comes from a bot named webhookbot."
// }, function(err, response) {
//   console.log(response);
// });