const { promisify } = require('util')

const getUser = (id, callback) => {
  setTimeout(() => {
    callback(null, {
      cpf: '12345678900',
      id,
      name: 'Vinnys'
    })
  }, 2000)
}

const getUserAsync = promisify(getUser)

const fn = async () => {
  const user = await getUserAsync(1)

  console.log(user)
}

fn()
