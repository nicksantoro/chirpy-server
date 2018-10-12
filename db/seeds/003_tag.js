exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('tags')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('tags').insert([
        {
          id: 1,
          tag: '#nature'
        },
        {
          id: 2,
          tag: '#photography'
        },
        {
          id: 3,
          tag: '#poetry'
        },
        {
          id: 4,
          tag: '#photo'
        }, 
      ])
    })
    .then(() =>
      knex.raw(
        `SELECT setval('"tags_id_seq"', (SELECT MAX("id") FROM "tags"))`
      )
    )
}
