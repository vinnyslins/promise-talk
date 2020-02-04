const promise = new Promise((resolve) => {
  resolve({ success: true })
})

const resolveAfter1000ms = value => new Promise(resolve => {
  setTimeout(() => {
    resolve(value)
  }, 1000)
})

const rejectAfter1000ms = () => new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Error'))
  }, 1000)
})

promise
  .then(value => ({ ...value, now: Date.now() }))
  .catch(() => rejectAfter1000ms())
  .then(value => resolveAfter1000ms(value))
  .then(() => rejectAfter1000ms())
  .then(console.log)
  .catch(error => console.error(error.message))
