const getUser = id => new Promise(resolve => {
  setTimeout(() => {
    resolve({
      cpf: '12345678900',
      id,
      name: 'Vinnys'
    })
  }, 3000)
})

const rejectAfterTimeout = milliseconds => new Promise((_, reject) => {
  setTimeout(() => {
    reject(new Error('Request timeout'))
  }, milliseconds)
})

const getData = async () => {
  try {
    const user = await Promise.race([
      getUser(1),
      rejectAfterTimeout(2000)
    ])

    console.log(user)
  } catch (error) {
    console.error(error.message)
  }
}

getData()
