// https://kubernetes.io/docs/tasks/inject-data-application/environment-variable-expose-pod-information/

var Slack = require('slack-node');
var moment = require('moment-timezone');

var TIME_ZONE='America/Los_Angeles';

var SLACK_WEBHOOK = process.env.SLACK_WEBHOOK || "NotReadFromEnv";
var SLACK_CHANNEL = process.env.SLACK_CHANNEL || "NotReadFromEnv";
var MY_NODE_NAME = process.env.MY_NODE_NAME || "NotReadFromEnv";
var MY_POD_NAME = process.env.MY_POD_NAME || "NotReadFromEnv";
var MY_TIME = moment().tz(TIME_ZONE).format();

var message = "This CronJob was run on this shortlived pod: " + MY_POD_NAME +
"At " + MY_TIME + "On Node: " + MY_NODE_NAME +
"And Posted to: " + SLACK_CHANNEL;

console.log("The SLACK_CHANNEL is set to: ", process.env.SLACK_CHANNEL);
console.log("Message: " + message);

slack = new Slack();
slack.setWebhook(SLACK_WEBHOOK);
 
slack.webhook({
  channel: SLACK_CHANNEL,
  username: "kube-cron-slack",
  text: message
}, function(err, response) {
  console.log(response);
});