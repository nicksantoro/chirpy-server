exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('content_tags')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('content_tags').insert([{
          id: 1,
          content_id: 2,
          tags_id: 1
        },
        {
          id: 2,
          content_id: 1,
          tags_id: 1
        },
        {
          id: 3,
          content_id: 2,
          tags_id: 3
        },
        {
          id: 4,
          content_id: 1,
          tags_id: 4
        }
      ])
    })
    .then(() =>
      knex.raw(
        `SELECT setval('"content_tags_id_seq"', (SELECT MAX("id") FROM "content_tags"))`
      )
    )
}