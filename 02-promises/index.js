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

getUser(1)
  .then(user => {
    getAccount(user.cpf)
      .then(account => {
        getTransactions(account.agency, account.account)
          .then(transactions => {
            console.log(user, account, transactions)
          }).catch(console.error)
      }).catch(console.error)
  }).catch(console.error)

getUser(1)
  .then(user => getAccount(user.cpf))
  .then(account => getTransactions(account.agency, account.account))
  .then(console.log)
  .catch(console.error)
