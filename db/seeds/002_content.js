exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('content')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('content').insert([
        {
          id: 1,
          user_id: 1,
          title: 'title post',
          body: 'hello world, this is my post.',
          type: 'text'
        },
        {
          id: 2,
          user_id: 2,
          title: 'photo post',
          body: 'data',
          type: 'text'
        },
        {
          id: 3,
          user_id: 2,
          title: 'happy post',
          body: 'hello world, this is my post.',
          type: 'text'
        },
        {
          id: 4,
          user_id: 1,
          title: 'newest post',
          body: 'hello world, this is my new post.',
          type: 'text'
        }
        
      ])
    })
    .then(() =>
      knex.raw(
        `SELECT setval('"content_id_seq"', (SELECT MAX("id") FROM "content"))`
      )
    )
}