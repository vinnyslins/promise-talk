const getUser = id => new Promise((resolve, reject) => {
  throw new Error('User not found')
  console.log('This will not be printed')
})

getUser()
  .then(console.log)
  .catch(error => console.error(error.message))
