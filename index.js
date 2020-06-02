const Discord = require('discord.js')
const moment = require('moment-timezone')
const { apiCall } = require('./api.js')
const { DISCORD_KEY } = require('./keys.js')

const client = new Discord.Client()

moment.tz.add('America/New_York|EST|80 70|0101|1Lzm0 1zb0 Op0')

let dates = [
  '2020-09-11T00:20:00+0000',
  '2020-09-13T17:00:00+0000',
  '2020-09-14T00:20:00+0000',
  '2020-09-15T02:10:00+0000',
  '2020-09-18T00:20:00+0000',
  '2020-09-20T17:00:00+0000',
  '2020-09-21T00:20:00+0000',
  '2020-09-22T01:15:00+0000',
  '2020-09-25T01:20:00+0000',
  '2020-09-27T18:00:00+0000',
  '2020-09-28T01:20:00+0000',
  '2020-09-29T01:15:00+0000',
  '2020-10-02T01:20:00+0000',
  '2020-10-04T18:00:00+0000',
  '2020-10-05T01:20:00+0000',
  '2020-10-06T01:15:00+0000',
  '2020-10-09T01:20:00+0000',
  '2020-10-11T18:00:00+0000',
  '2020-10-12T01:20:00+0000',
  '2020-10-13T01:15:00+0000',
  '2020-10-16T01:20:00+0000',
  '2020-10-18T18:00:00+0000',
  '2020-10-19T01:20:00+0000',
  '2020-10-20T01:15:00+0000',
  '2020-10-23T01:20:00+0000',
  '2020-10-25T18:00:00+0000',
  '2020-10-26T01:20:00+0000',
  '2020-10-27T01:15:00+0000',
  '2020-10-30T01:20:00+0000',
  '2020-11-01T18:00:00+0000',
  '2020-11-02T01:20:00+0000',
  '2020-11-03T01:15:00+0000',
  '2020-11-06T01:20:00+0000',
  '2020-11-08T18:00:00+0000',
  '2020-11-09T01:20:00+0000',
  '2020-11-10T01:15:00+0000',
  '2020-11-13T01:20:00+0000',
  '2020-11-15T18:00:00+0000',
  '2020-11-16T01:20:00+0000',
  '2020-11-17T01:15:00+0000',
  '2020-11-20T01:20:00+0000',
  '2020-11-22T18:00:00+0000',
  '2020-11-23T01:20:00+0000',
  '2020-11-24T01:15:00+0000',
  '2020-11-26T17:30:00+0000',
  '2020-11-27T01:20:00+0000',
  '2020-11-29T18:00:00+0000',
  '2020-11-30T01:20:00+0000',
  '2020-12-01T01:15:00+0000',
  '2020-12-04T01:20:00+0000',
  '2020-12-06T18:00:00+0000',
  '2020-12-07T01:20:00+0000',
  '2020-12-08T01:15:00+0000',
  '2020-12-11T01:20:00+0000',
  '2020-12-13T18:00:00+0000',
  '2020-12-14T01:20:00+0000',
  '2020-12-15T01:15:00+0000',
  '2020-12-18T01:20:00+0000',
  '2020-12-20T18:00:00+0000',
  '2020-12-21T01:20:00+0000',
  '2020-12-22T01:15:00+0000',
  '2020-12-26T01:20:00+0000',
  '2020-12-27T18:00:00+0000',
  '2020-12-28T01:20:00+0000',
  '2020-12-29T01:15:00+0000',
  '2021-01-03T18:00:00+0000'
]

const sleeperLeagueId = '515636673765777408'

client.once('ready', () => {
  console.log('Ready!')
  console.log(dates)

  // TODO: UNCOMMENT TO KEEP DATES UP TO DATE. SAVING API CALLS BY AVOIDING
  // apiCall('get', 'dates').then(res => {
  //   console.log(res)
  //   dates = res.dates
  // })
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

const artPhrases = [
  'As someone with a well-earned degree in the subject, I agree.',
  'Ah yes, art. I studied it well.',
  'I remember that from the countless hours of class I attended',
  "We went through hell and back together in that art building. They'll never understand the hours we put into our craft."
]

const degreePhrases = [
  "As someone with a well-earned degree, I couldn't agree more.",
  'Ah yes, earning a degree. I remember it well.',
  'I countless hours of class I attended',
  "We went through hell and back to get our degrees. They'll never understand the hours we put into our craft."
]

const marylandPhrases = [
  'Yeah, we probably do have the longest drive',
  'Shawn and I do probably drive the furthest to these things',
  "I've always said we should do one of these down here some time",
]

const phishPhrases = [
  "You're starting to sound like Alex",
  "Can we PLEASE keep all phish-related content in the Phish channel? That's what it's there for",
  "Alright that's it, I'm moving you over to the Phish role."
]

const nintendoPhrases = [
  "Ang has been using my Switch a lot more than I have lately",
  "I kinda miss my Switch. But I find myself mainly playing games on PC these days"
]

const getWeekdayAsNumber = (dayName) => {
  let dayINeed = {
    date: 0,
    isDate: false
  }
  switch(dayName) {
    case 'mon':
    case 'monday':
      dayINeed.date = 1
      break
    case 'tue':
    case 'tues':
    case 'tuesday':
      dayINeed.date = 2
      break
    case 'wed':
    case 'wednesday':
      dayINeed.date = 3
      break
    case 'thur':
    case 'thurs':
    case 'thursday':
      dayINeed.date = 4
      break
    case 'fri':
    case 'friday':
      dayINeed.date = 5
      break
    case 'sat':
    case 'saturday':
      dayINeed.date = 6
      break
    case 'sun':
    case 'sunday':
      dayINeed.date = 7
      break
    default:
      dayINeed.date = `${dayName} ${moment().format('YYYY')}`
      dayINeed.isDate = true
  }
  return dayINeed
}

const isMarylandResponse = (message) => {
  return message.includes('from maryland') ||
    (message.includes('maryland') &&
      (message.includes('drive') || message.includes('drove') || message.includes('travel') || message.includes('distance')))
}


client.on('message', message => {
  const lowercaseMessage = message.content.toLowerCase()
  const lowercaseMessageStrip = lowercaseMessage.replace("'", '').replace('playin ', 'playing ')
  const channelName = message.channel.name
  const wasSelfMessage = message.author.username === 'JonBot'

  const saidStrings = names.map(name => `${name.toLowerCase()} said`)
  let relevantName


  const chooseAndSendPhrase = (array) => {
    const randNum = Math.random() * 100
    const simplified = randNum * array.length / 100
    const rounded = Math.floor(simplified)
    message.channel.send(array[rounded])
  }


  if (!wasSelfMessage) {
    // Non-Phish Channel
    if (isMarylandResponse(lowercaseMessage)) {
      if (lowercaseMessage.includes('sports')) {
        message.channel.send(`Go Fleas!`)
      } else {
        chooseAndSendPhrase(marylandPhrases)
      }
    } else if (lowercaseMessage.includes('phish')) {
      chooseAndSendPhrase(phishPhrases)
    } else if (saidStrings.some((v) => {
      if (lowercaseMessage.indexOf(v) >= 0) {
        relevantName = v.split(' said')[0]
        return true
      }
    })) {
      message.channel.send(`Yeah, that does sound like something ${relevantName} would say.`)
    } else if (lowercaseMessage.includes('nintendo') || lowercaseMessage.includes('switch')) {
      chooseAndSendPhrase(nintendoPhrases)
    } else if (lowercaseMessage.includes('art')) {
      chooseAndSendPhrase(artPhrases)
    } else if (lowercaseMessage.includes('degree')) {
      chooseAndSendPhrase(degreePhrases)
    }

    if (lowercaseMessage.includes('hilarious') || lowercaseMessage.includes('funny')) {
      message.react('😄')
    }



    // Football stuff
    const isPlayingTodayQuery = lowercaseMessageStrip.includes('whos playing today') || lowercaseMessageStrip.includes ('who is playing today')
    const isPlayingTomorrowQuery = lowercaseMessageStrip.includes('whos playing tomorrow') || lowercaseMessageStrip.includes ('who is playing tomorrow')
    const isPlayingDayOfWeekOrDateQuery = lowercaseMessageStrip.includes('whos playing on') || lowercaseMessageStrip.includes ('who is playing on')
    const didPlayDateQuery = lowercaseMessageStrip.includes('who played on')
    const splitOnNext = lowercaseMessageStrip.includes('whos playing next') || lowercaseMessageStrip.includes('who is playing next')
    const splitOnLast = lowercaseMessageStrip.includes('whos playing last') || lowercaseMessageStrip.includes('who is playing last')

    const handleNextGameRequest = (additionalTextBefore = '') => {
      const nextGameIndex = dates.findIndex(game => moment(game).isAfter(moment()))
      const nextGameFormatted = moment(dates[nextGameIndex]).format('YYYY-MM-DD')
      const nextGameString = `${moment(dates[nextGameIndex]).calendar()} at ${moment.tz(dates[nextGameIndex], 'America/New_York').format('h:mm a')} EST`
      // apiCall('get', `events/${nextGameFormatted}`)

      message.channel.send(`${additionalTextBefore}The next game is ${nextGameString}`)
    }

    const getGameBlock = (event) => {
      const title = event.schedule.event_name.split(' - 2020')[0]
      const embed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle(title)
        .setURL('https://discord.js.org/')
        .setDescription(`The ${event.teams[0].name} will take on the ${event.teams[1].name} at ${moment(event.event_date, 'America/New York').format('h:mm a')} EST`)
        .addFields(
          { name: `${event.teams[0].name} - ${event.teams[0].is_home ? 'Home' : 'Away'}`, value: `Current Record: ${event.teams_normalized[0].record}`, inline: true },
          { name: `${event.teams[1].name} - ${event.teams[1].is_home ? 'Home' : 'Away'}`, value: `Current Record: ${event.teams_normalized[1].record}`, inline: true },
        )
        .setTimestamp()

      message.channel.send(embed)
    }

    const handleIsPlayingQuery = (date, displayString) => {
      const queryString = `events/${date}`
      apiCall('get', queryString).then(res => {
        const numGames = res.events.length
        const noGames = res.events.length === 0
        const oneGame = numGames === 1
        const displayStringGrammar = displayString !== 'today' && displayString !== 'tomorrow' ? `on ${displayString}` : displayString

        if (noGames) {
          handleNextGameRequest(`There are no games ${displayStringGrammar}. `)
        } else {
          message.channel.send(`There ${oneGame ? 'is' : 'are'} ${numGames} game${oneGame ? '' : 's'} ${displayStringGrammar}.`)

          res.events.forEach(event => {
            getGameBlock(event)
          })
        }
      })
      .catch(err => message.channel.send(err))
    }
 

    if (isPlayingTodayQuery) {
      const date = moment().format('YYYY-MM-DD')
      handleIsPlayingQuery(date, 'today')
    } else if (isPlayingTomorrowQuery) {
      const date = moment().add(1, 'd').format('YYYY-MM-DD')
      handleIsPlayingQuery(date, 'tomorrow')
    } else if (isPlayingDayOfWeekOrDateQuery || splitOnNext) {
      const dayName = splitOnNext ? lowercaseMessageStrip.split('next ')[1] : lowercaseMessageStrip.split('on ')[1]
      const dayINeed = getWeekdayAsNumber(dayName)
      const today = moment().isoWeekday()
      const date = today <= dayINeed.date ? moment().isoWeekday(dayINeed.date) : moment().add(1, 'weeks').isoWeekday(dayINeed.date)
      const dateToFormat = dayINeed.isDate ? dayINeed.date : date
      const dateFormatted = moment(dateToFormat).format('YYYY-MM-DD')
      if (dayName) {
        handleIsPlayingQuery(dateFormatted, dayName)
      } else {
        handleNextGameRequest()
      }
    } else if (didPlayDateQuery) {
      const dayName = splitOnLast ? lowercaseMessageStrip.split('last ')[1] : lowercaseMessageStrip.split('on ')[1]
      const dayINeed = getWeekdayAsNumber(dayName)
      const today = moment().isoWeekday()
      const date = today >= dayINeed.date ? moment().isoWeekday(dayINeed.date) : moment().subtract(1, 'weeks').isoWeekday(dayINeed.date)
      const dateToFormat = dayINeed.isDate ? dayINeed.date : date
      const dateFormatted = moment(dateToFormat).format('YYYY-MM-DD')
      if (dayName) {
        handleIsPlayingQuery(dateFormatted, dayName)
      }
    }
  }

});

client.login(DISCORD_KEY)