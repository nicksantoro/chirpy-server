exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('users').insert([
        {
          id: 1,
          first_name: 'Nick',
          last_name: 'Santoro',
          email: 'santoro.nick@gmail.com',
          profile_name: 'profile_name1',
          password: 'password',
          city: 'san francisco'
        },
        {
          id: 2,
          first_name: 'Sam',
          last_name: 'Santoro',
          email: 'santoro.sam@gmail.com',
          profile_name: 'profile_name2',
          password: 'password',
          city: 'oakland'
        },
        {
          id: 3,
          first_name: 'June',
          last_name: 'Santoro',
          email: 'santoro.june@gmail.com',
          profile_name: 'profile_name3',
          password: 'password',
          city: 'oakland'
        },
        {
          id: 4,
          first_name: 'Alexis',
          last_name: 'Santoro',
          email: 'santoro.alexis@gmail.com',
          profile_name: 'profile_name4',
          password: 'password',
          city: 'san francisco'
        }
        
      ])
    })
    .then(() =>
      knex.raw(
        `SELECT setval('"users_id_seq"', (SELECT MAX("id") FROM "users"))`
      )
    )
}