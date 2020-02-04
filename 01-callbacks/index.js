const getUser = (id, callback) => {
  setTimeout(() => {
    callback(null, {
      cpf: '12345678900',
      id,
      name: 'Vinnys'
    })
  }, 2000)
}

const getAccount = (cpf, callback) => {
  setTimeout(() => {
    callback(null, {
      account: '12345-0',
      agency: '0000',
      balance: 1000
    })
  }, 3000)
}

const getTransactions = (agency, account, callback) => {
  setTimeout(() => {
    callback(null, [])
  }, 5000)
}

getUser(1, (err, user) => {
  if (err) throw err

  getAccount(user.cpf, (err, account) => {
    if (err) throw err

    getTransactions(account.agency, account.account, (err, transactions) => {
      if (err) throw err

      console.log(user, account, transactions)
    })
  })
})
