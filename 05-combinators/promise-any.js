const Correios = {
  getAddress: cep => new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error('Request timeout'))
    }, 2000)
  })
}

const ViaCEP = {
  getAddress: cep => new Promise(resolve => {
    setTimeout(() => {
      resolve({
        city: 'Campinas',
        neighborhood: 'Fazenda Santa Cândida',
        state: 'SP',
        street: 'Rua Josefina Gori Fiorani'
      })
    }, 3000)
  })
}

const fn = async () => {
  const cep = '13087-607'

  try {
    // Babel is required
    const address = await Promise.any([
      Correios.getAddress(cep),
      ViaCEP.getAddress(cep)
    ])

    console.log(address)
  } catch {
    console.error('Address not found')
  }
}

fn()
