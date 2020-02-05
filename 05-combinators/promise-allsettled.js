const phrases = [
  'Raoni approved',
  '8k approved',
  'Why so asynchronous?',
  'Promises mas não cumprises'
]

const generatePhrase = () => phrases[Math.floor(Math.random() * phrases.length)]

const resolveAfterTimeout = milliseconds => new Promise(resolve => {
  setTimeout(() => {
    resolve(generatePhrase())
  }, milliseconds)
})

const rejectAfterTimeout = milliseconds => new Promise((_, reject) => {
  setTimeout(() => {
    reject('Error')
  }, milliseconds)
})

const fn = async () => {
  const responses = await Promise.allSettled([
    resolveAfterTimeout(3000),
    resolveAfterTimeout(4000),
    rejectAfterTimeout(2000),
    rejectAfterTimeout(3000)
  ])

  console.log(responses)
}

fn()
