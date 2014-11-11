var Slack = require('node-slack');

var slack = new Slack('helpscout', 'qH9jvJB62fVc8eNtlgc74KYF');

slack.send({
    text: "Does this look like Brett?",
    channel: '#test',
    icon_url: 'https://s3-us-west-2.amazonaws.com/slack-files2/avatars/2014-11-07/2961971603_0e71ffea27766f356c4a_72.jpg',
    username: "b\u200Br​ett"
});