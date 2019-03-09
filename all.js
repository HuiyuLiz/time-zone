(function () {
  let countries = [{
    location: 'NEW YORK', timeZone: 'America/New_York'
  }, {
    location: 'LONDON', timeZone: 'Europe/London'
  }, {
    location: 'BANGKOK', timeZone: 'Asia/Bangkok'
  }, {
    location: 'TAIWAN', timeZone: 'Asia/Taipei'
  }, {
    location: 'SYDNEY', timeZone: 'Australia/Sydney'
  }]
  let clock = function () {
    const date = new Date()
    const options = { year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: false }
    countries.forEach((country, index) => {
      const localTime = date.toLocaleString('en-US', { timeZone: country.timeZone, ...options });
      // 產出格式 Feb 6, 2019, 14: 08: 44
      let str = localTime.split(' ')
      let time = str[3].substring(0, 5)
      let day = str[1].replace(/,/g, '')
      let mon = str[0].toUpperCase()
      let year = str[2].replace(/,/g, '')
      let locations = document.querySelectorAll('.location')
      locations[index].innerHTML = ` ${country.location}`
      let dates = document.querySelectorAll('.date')
      dates[index].innerHTML = `${day} ${mon}. ${year}`
      let times = document.querySelectorAll('.time')
      times[index].innerHTML = time
      //  判斷白天夜晚
      let cards = document.querySelectorAll('.card-body')
      let hour = Number(time.substring(0, 2))
      if (hour >= 6 && hour < 18) {
        cards[index].setAttribute('class', 'card-body bg-light')
      } else {
        cards[index].setAttribute('class', 'card-body bg-dark')
      }
    })
  }
  clock()
  setInterval(clock, 1000)
})()
