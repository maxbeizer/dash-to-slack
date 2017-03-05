'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var config = {
  slackWebhookURL: process.env.SLACK_WEBHOOK_URL,
  channelName: process.env.CHANNEL_NAME || '#doorbell',
  messageToSend: process.env.MESSAGE_TO_SEND || '@channel the doorbell is ringing!',
  userName: process.env.USER_NAME || 'Doorbell bot',
  buttonMACAddress: process.env.BUTTON_MAC_ADDRESS
};

exports.default = config;