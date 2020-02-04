const getUser = id => new Promise((resolve, reject) => {
  reject(new Error('User not found'))
  console.log('This will be printed')
})

getUser()
  .then(console.log)
  .catch(error => console.error(error.message))
