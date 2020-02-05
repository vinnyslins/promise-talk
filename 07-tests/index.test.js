const { resolveAfterTimeout, rejectAfterTimeout } = require('./index')

describe('resolveAfterTimeout function', () => {
  it('Must return a promise that will be resolved', () => {
    return expect(resolveAfterTimeout(1000)).resolves.toBe('Success')
  })
})

describe('rejectAfterTimeout function', () => {
  it('Must return a promise that will be rejected', () => {
    return expect(rejectAfterTimeout(1000)).rejects.toBe('Error')
  })
})
