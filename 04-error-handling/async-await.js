const getUser = id => new Promise(resolve => {
  setTimeout(() => {
    resolve({
      cpf: '12345678900',
      id,
      name: 'Vinnys'
    })
  }, 1000)
})

const getAccount = async cpf => {
  if (!cpf) throw new Error('CPF not provided')
  return {
    account: '12345-0',
    agency: '0000',
    balance: 1000
  }
}

const getData = async () => {
  try {
    const user = await getUser(1)
    const account = await getAccount()

    console.log(user, account)
  } catch (error) {
    console.error(error.message)
  }
}

getData()
