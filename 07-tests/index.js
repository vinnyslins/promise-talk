module.exports = {
  resolveAfterTimeout: milliseconds => new Promise(resolve => {
    setTimeout(() => {
      resolve('Success')
    }, milliseconds)
  }),

  rejectAfterTimeout: milliseconds => new Promise((_, reject) => {
    setTimeout(() => {
      reject('Error')
    }, milliseconds)
  })
}
