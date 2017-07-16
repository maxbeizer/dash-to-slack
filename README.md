# Dash to Slack

_Currently pretty WIP._
Connect your "hacked" Amazon Dash button to your Slack.

## Requirements

1. Node
2. `libcap-dev`

## Installation and Execution

1. [Find the Dash button MAC
   address](https://github.com/hortinstein/node-dash-button#find-a-dash)
2. Set an [incoming webhook on Slack](https://api.slack.com/incoming-webhooks)

```
$ cp .env.dist .env # and fill in the MAC address and the webhook
$ sudo apt-get install libcap-dev # to listen for Dash presses
$ sudo bin/run &
```

## Development

1. Run the tests with `npm test`
2. `npm run prepublish` to convert ES2015 to ES5


## License

[MIT](https://github.com/maxbeizer/dash-to-slack/blob/master/LICENSE)
