const getUser = id => Promise.resolve({
  cep: '13087-607',
  cpf: '12345678900',
  id,
  name: 'Vinnys'
})

const getAccount = cpf => new Promise(resolve => {
  setTimeout(() => {
    resolve({
      account: '12345-0',
      agency: '0000',
      balance: 1000
    })
  }, 2000)
})

const getAddress = cep => new Promise(resolve => {
  setTimeout(() => {
    resolve({
      city: 'Campinas',
      neighborhood: 'Fazenda Santa Cândida',
      state: 'SP',
      street: 'Rua Josefina Gori Fiorani'
    })
  }, 3000)
})

const getData = async () => {
  const user = await getUser(1)

  const promises = [
    getAccount(user.cpf),
    getAddress(user.cep)
  ]

  console.time('time')
  const [account, address] = await Promise.all(promises)
  console.timeEnd('time') // ~= 3002.915ms

  console.log(account, address)
}

getData()
