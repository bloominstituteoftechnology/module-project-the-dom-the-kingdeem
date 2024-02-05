  function moduleProject1() {
  const footer = document.querySelector('footer')
  const currentYear = new Date().getFullYear()
  footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${currentYear}`

  // 👇 WORK WORK BELOW THIS LINE 👇

  // 👉 TASK 1 - Add a "widget" class name to widgets so CSS kicks in
  //  ✨ add your code here
    let widgets = document.querySelectorAll('section div')
    widgets.forEach(widget => {
      widget.classList.add('widget')
    })

  // 👉 TASK 2 - Build a "Quote of the Day" widget
  //  ✨ add your code here
    let pickQuote = Math.floor(Math.random() * 10)
    let quoteOfDay = quotes[pickQuote]
    let quote = document.createElement('div')
    let quoteText = quoteOfDay.quote
    quote.textContent = quoteText
    let quoteWidget = document.querySelector('.quoteoftheday')
    quoteWidget.appendChild(quote)
    
    let authDate = document.createElement('div')
    let {author, date} = quoteOfDay
    authDate.textContent = `${author} in ${date || 'an unknown date'}`
    let authDateWidget = document.querySelector('.quoteoftheday')
    authDateWidget.appendChild(authDate)

  // 👉 TASK 3 - Build a "Corporate Speak" widget
  //  ✨ add your code here
    let pickAdverb1 = adverbs[Math.floor(Math.random() * adverbs.length)]
    let pickAdverb2 = adverbs[Math.floor(Math.random() * adverbs.length)]
    let pickVerb1 = verbs[Math.floor(Math.random() * verbs.length)]
    let pickVerb2 = verbs[Math.floor(Math.random() * verbs.length)]
    let pickNoun1 = nouns[Math.floor(Math.random() * nouns.length)]
    let pickNoun2 = nouns[Math.floor(Math.random() * nouns.length)]
    
    let cSpeak = document.createElement('p')
      cSpeak.textContent = `We need to ${pickVerb1} our ${pickNoun1} ${pickAdverb1}
    in order to ${pickVerb2} our ${pickNoun2} ${pickAdverb2}.`
    let addP = document.querySelector('.corporatespeak')
    addP.appendChild(cSpeak)

  // 👉 TASK 4 - Build a "Countdown" widget
  //  ✨ add your code here
    let countdownWidget = document.querySelector('.countdown')
    let number = 5
    let countdown = document.createElement('p')
    countdown.textContent = `T-minus ${number}...`
    countdownWidget.appendChild(countdown)
    setInterval(() => {
      if (number === 1) {
        countdown.textContent = 'Liftoff! 🚀 '
      } else {
      number--
      countdown.textContent = `T-minus ${number}...`
      }
    }, 1000)

  // 👉 TASK 5 - Build a "Friends" widget
  //  ✨ add your code here
    let pickPerson = people[Math.floor(Math.random() * people.length)]
    let description = document.createElement('p')
    let friendsWidget = document.querySelector('.friends').appendChild(description)
    let year = pickPerson.dateOfBirth.split('-')[0]
    let descriptionP = `${pickPerson.fname} ${pickPerson.lname} was born in ${year} and `

    if (pickPerson.friends.length === 0) {
      descriptionP += 'has no friends.'
    }
    else {
      descriptionP += 'is friends with '
      for (let i = 0; i < pickPerson.friends.length; i++) {
        let friendNum = pickPerson.friends[i]
        let friend = people.find(p => p.id === friendNum)
        let friendName = `${friend.fname} ${friend.lname}`
        let needPeriod = i === pickPerson.friends.length - 1
        let needAnd = i === pickPerson.friends.length - 2
        if (needPeriod) {
          descriptionP += `${friendName}.`
        }
        else if (needAnd) {
          descriptionP += `${friendName} and `
        }
        else {
          descriptionP += `${friendName}, `
        }
      }
    }
    description.textContent = descriptionP


  // 👉 TASK 6 - Make it so user can tab through the widgets
  //  ✨ add your code here
  //let widgets = document.querySelectorAll('section div')
    widgets.forEach((widget, i) => {
      widget.classList.add('widget')
      widget.setAttribute('tabindex', i + 1)
    })

  // 👆 WORK WORK ABOVE THIS LINE 👆
}

// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
if (typeof module !== 'undefined' && module.exports) module.exports = { moduleProject1 }
else moduleProject1()
