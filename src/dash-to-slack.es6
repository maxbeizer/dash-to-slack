import config from './config'
import SlackClient from 'slack-notify'
import DashButton from 'node-dash-button'

if(!config.slackWebhookURL) {
  throw Error('You must set a SLACK_WEBHOOK_URL environment variable')
}

if(!config.buttonMACAddress) {
  throw Error('You must set a BUTTON_MAC_ADDRESS environment variable')
}

const client = SlackClient(config.slackWebhookURL)
const button = DashButton(config.buttonMACAddress, null, null, 'all')

const sendMsgToSlack = (dashMACAdress) => {
  if (config.buttonMACAddress !== dashMACAdress) return

  client.send({
    channel: config.channelName,
    text: config.messageToSend,
    username: config.userName
  })
}

button.on('detected', (dashMACAdress) => sendMsgToSlack(dashMACAdress))
