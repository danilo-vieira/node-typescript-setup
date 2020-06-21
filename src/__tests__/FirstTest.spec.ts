import User from '../models/User'

test('it should be ok', () => {
  const user = new User()

  Object.assign(user, {
    name: 'John Doe'
  })

  expect(user.name).toEqual('John Doe')
})
