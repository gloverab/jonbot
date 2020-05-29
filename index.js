const Discord = require('discord.js')

const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

const names = [
  'Alex',
  'Beth',
  'Elizabeth',
  'Eric',
  'Journey',
  'Leah',
  'Mike',
  'Nate',
  'Phil',
  'Sarah',
  'Sean',
  'Shawn',
  'Wes'
]


client.on('message', message => {
  const lowercaseMessage = message.content.toLowerCase()
  const channelName = message.channel.name

  const saidStrings = names.map(name => `${name.toLowerCase()} said`)
  let relevantName

  // Non-Phish Channel
  if (lowercaseMessage.includes('maryland')) {
    if (lowercaseMessage.includes('sports')) {
      message.channel.send(`Go Fleas!`)
    } else {
      message.channel.send('Yeah, we probably do have the longest drive')
    }
  } else if (lowercaseMessage.includes('phish') && message.author.username !== 'JonBot') {
    message.channel.send("Can we PLEASE keep all phish-related content in the Phish channel? That's what it's there for")
  } else if (saidStrings.some((v) => {
    if (lowercaseMessage.indexOf(v) >= 0) {
      relevantName = v.split(' said')[0]
      return true
    }
  })) {
    message.channel.send(`Yeah, that does sound like something ${relevantName} would say.`)
  } else if (lowercaseMessage.includes('nintendo') || lowercaseMessage.includes('switch')) {
    message.channel.send("Ang has been using my Switch a lot more than I have lately")
  }

  if (lowercaseMessage.includes('hilarious') || lowercaseMessage.includes('funny')) {
    message.react('😄')
  }


  // Non-Football Channel

});

client.login('NzE1NjgyMDEyMzg3NjA2NTc5.XtAyJg.qUSoH8O57dhxoyXv92QAsiJhsT0')