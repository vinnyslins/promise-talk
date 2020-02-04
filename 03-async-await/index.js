const getUser = id => new Promise(resolve => {
  setTimeout(() => {
    resolve({
      cpf: '12345678900',
      id,
      name: 'Vinnys'
    })
  }, 2000)
})

const getAccount = cpf => new Promise(resolve => {
  setTimeout(() => {
    resolve({
      account: '12345-0',
      agency: '0000',
      balance: 1000
    })
  }, 3000)
})

const getTransactions = (agency, account) => new Promise(resolve => {
  setTimeout(() => {
    resolve([])
  }, 5000)
})

const getData = async () => {
  const user = await getUser(1)
  const account = await getAccount(user.cpf)
  const transactions = await getTransactions(account.agency, account.account)

  console.log(user, account, transactions)
}

getData()
