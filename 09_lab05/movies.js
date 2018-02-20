/****************************************************************************
 * Lab 05                                                                   *
 * 02/19/2018 07:30pm                                                       *
 *                                                                          *
 * Date       | Reason                          | Developer                 *
 * 02/19/2018 | Original                        | Eric A. Mayberry IV (EAM) *
 *                                                                          *
 ****************************************************************************/


db.movies.insert({
    "name": "black panther",
    "rating":10,
    "genre":["sci-fi", "action"],
    "comments":[{"name":"david","comment":"best marvel movie, yet!"},
                {"name":"jess","comment": "not one single complaint, absolute perfection"}]
})

db.movies.insert({
    "name": "cinderella",
    "rating":7,
    "genre":["cartoon", "family"],
    "comments":[{"name":"stephanie","comment":"my favorite princess movie"},
                {"name":"jess", "comment":"disney princesses rule!"}]
})

db.movies.insert({
    "name": "pulp fiction",
    "rating":8,
    "genre":["action"],
    "comments":[{"name":"johnny","comment":"bloody and violent, i love it!"},
                {"name":"ronnie", "comment":"qt's best film to date"}]
})

db.movies.insert({
    "name": "thor",
    "rating":6,
    "genre":["sci-fi", "action"],
    "comments":[{"name":"david","comment":"i love thor!"},
                {"name":"joseph", "comment":"it could have been better"},
                {"name":"john", "comment":"we need more thor"}]
})

db.movies.insert({
    "name": "pitch perfect 3",
    "rating":6,
    "genre":["comedy"],
    "comments":[{"name":"stephanie","comment":"funniest musical"},
                {"name":"jess", "comment":"pretty good"}]
})

db.movies.insert({
    "name": "star trek",
    "rating":8,
    "genre":["Sci-Fi", "ction"],
    "comments":[{"name":"donnie","comment":"i love star trek"},
                {"name":"jess", "comment":"picard was the best captain"}]
})





//1. Add a genre to a movie that currently does not have that genre.

    //  db.movies.update({"name":"pitch perfect 3"},{"$push":{"genre":"musical"}})

//2. Add a genre to a movie that currently has the genre (there should be no
//   duplicates. A genre should not appear twice)

    //  db.movies.update({"name":"black panther"},{"$addToSet":{"genre":"action"}})

//3. Remove a genre from one of the movies.

    // db.movies.update({"name":"star trek"},{"$pop":{"genre":1}})

//4. Remove the last comment from the movie "Cinderella"

    // db.movies.update({},{})

//5. Find all comments that use the word "love"

    // db.movies.find({"comments.comment":{"$regex":/love/i}},{"_id":0}).pretty()

//6. For all movies with an average rating below 8, add a comment from"joe" that
//   says "low to midrange turnout"

    // db.movies.update({"rating":{"$lt":8}},{"$addToSet":{"comments" : {"name":"joe", "comment":"testing"}}})
