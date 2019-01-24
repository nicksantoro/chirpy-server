const chai = require('chai')
const expect = chai.expect
const config = require('../knexfile').test
const users = require('../src/models/users')

describe('chirpy-server', () => {
  before(() => {
    const tmpConnection = require('knex')({
      client: 'pg',
      connection: config.connection
    })
    return tmpConnection
      .raw(`CREATE DATABASE ${config.connection.database};`)
      .catch(err => {
        Promise.resolve('Everything is OK')
      })
      .then(() => (global.knex = require('../queries/db')))
      .then(() => knex.migrate.rollback())
      .then(() => knex.migrate.latest(config))
      .then(() => knex.seed.run())
      .catch(() => console.log(`Migrations or seeds failed.`))
  })

  describe('#getAllUsers()', () => {
    let result
    let user
    let user4
    before(async () => {
      result = await users.getAllUsers()
      user = result[0]
      user4 = result[3]
    })

    it('should return an array of all the users in the database', () => {
      expect(result).to.be.an('array')
      expect(result.length).to.equal(4)
      // expect(result).to.include();
      expect(user.id).to.equal(1)
      expect(user4.id).to.equal(4)
      // expect(result[0]).to.have.all.keys('id', 'first_name', 'last_name', 'email', 'profile_name', 'password', 'city', 'created_at', 'updated_at')
    })
    it('should have all the keys', () => {
      expect(user).to.contain.keys(
        'id',
        'first_name',
        'last_name',
        'email',
        'profile_name',
        'password',
        'city'
      )
    })
  })

  describe('#getUserById()', () => {
    it('should return user with the id of 1', async () => {
      const result = await users.getUserById(1)
      expect(result[0].id).to.equal(1)
    })

  })

  describe('#deleteUser()', () => {
    let result
    before(async () => {
      result = await users.deleteUser(1)
    })
    it('should return deleted user', () => {
      expect(result.length).to.equal(1)
      expect(result).to.be.an('array')
    })
  })

  describe('#createUser()', () => {
    let user
    before(async () => {
      user = {
        id: 5,
        first_name: 'Paula',
        last_name: 'Santoro',
        email: 'santoro.paula@gmail.com',
        profile_name: 'paula',
        password: 'password',
        city: 'san francisco'
      }
    })
    it('should return user with id of 5', () => {
      expect(user.id).to.equal(5)
    })
  })


})


