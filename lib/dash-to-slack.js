'use strict';

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

var _slackNotify = require('slack-notify');

var _slackNotify2 = _interopRequireDefault(_slackNotify);

var _nodeDashButton = require('node-dash-button');

var _nodeDashButton2 = _interopRequireDefault(_nodeDashButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (!_config2.default.slackWebhookURL) {
  throw Error('You must set a SLACK_WEBHOOK_URL environment variable');
}

if (!_config2.default.buttonMACAddress) {
  throw Error('You must set a BUTTON_MAC_ADDRESS environment variable');
}

var client = (0, _slackNotify2.default)(_config2.default.slackWebhookURL);
var button = (0, _nodeDashButton2.default)(_config2.default.buttonMACAddress, null, null, 'all');

var sendMsgToSlack = function sendMsgToSlack(dashMACAdress) {
  if (_config2.default.buttonMACAddress !== dashMACAdress) return;

  client.send({
    channel: _config2.default.channelName,
    text: _config2.default.messageToSend,
    username: _config2.default.userName
  });
};

button.on('detected', function (dashMACAdress) {
  return sendMsgToSlack(dashMACAdress);
});