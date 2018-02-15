/****************************************************************************
 * Lab02                                                                    *
 * 1/29/2018 07:30pm                                                        *
 *                                                                          *
 * Date       | Reason                          | Developer                 *
 * 02/04/2018 | Original                        | Eric A. Mayberry IV (EAM) *
 *                                                                          *
 ****************************************************************************/

 // Truncate collection if it exists
//db.players.remove({})

// Insert document into collection
db.players.insert({
    "first_name": "Felix",
    "last_name": "Espinoza",
    "ppg": 12,
    "steals": 5,
    "ftp": 44,
    "home_city": "San Antonio",
    "state": "Texas",
    "hobbies": [
        "Video Games",
        "Writing"
    ]
})

// Insert document into collection
db.players.insert({
    "first_name": "Jessie",
    "last_name": "Roberts",
    "ppg": 18,
    "steals": 6,
    "ftp": 84,
    "home_city": "Cleveland",
    "state": "Ohio",
    "hobbies": [
        "Racing",
        "Hiking",
        "Running"
    ]
})

// Insert document into collection
db.players.insert({
    "first_name": "David",
    "last_name": "Thompson",
    "ppg": 7,
    "steals": 2,
    "ftp": 74,
    "home_city": "Bainbridge",
    "state": "Georgia",
    "hobbies": [
        "Hunting",
        "Fishing"
    ]
})

// Insert document into collection
db.players.insert({
    "first_name": "Stu",
    "last_name": "Potts",
    "ppg": 22,
    "steals": 2,
    "ftp": 92,
    "home_city": "Birmingham",
    "state": "Alabama",
    "hobbies": [
        "Writing",
        "Fishing",
        "Hiking"
    ]
})

// Insert document into collection
db.players.insert({
    "first_name": "Bob",
    "last_name": "Conway",
    "ppg": 16,
    "steals": 0,
    "ftp": 73,
    "home_city": "Tallahassee",
    "state": "Florida",
    "hobbies": [
        "Animation",
        "Video Games"
    ]
})

/*
 * 1. Find the players who are from florida, or Georgia or Alabama
 *    (us the in operator)
*/

/* 
db.players.find({
    "state": {
        "$in": [
            "Florida",
            "Georgia",
            "Alabama"
        ]
    }
}).pretty()
 */

/* 
 * 2. Find all the players last name smith. Return only the first
 *    name, last name and home state
*/

/* 
db.players.find({
    "last_name": "Smith"
},{
    "first_name": 1,
    "last_name": 1,
    "state": 1,
    "_id": 0
}).pretty()
 */

/* 
 * 3. Find all the players who have at least 3 steals
*/

/* 
db.players.find({
    "steals": {
        "$gte": 3
    }
}).pretty()
 */

/* 
 * 4. Find all the players who average between 10 and 20 points per game
*/

/* 
db.players.find({
    "ppg": {
        "$gte": 10,
        "$lte": 20
    }
}).pretty()
 */

/* 
 * 5. Find all the players who are from Tallahassee or last name is smith
*/

/* 
db.players.find({
    "$or": [
        {
            "home_city": "Tallahassee"
        },
        {
            "last_name": "Smith"
        }
    ]
}).pretty()
 */

/* 
 * 6. Find all players from Georgia who have a ftp of at least 70. Return 
 *    only first name, lastname, city, and ftp.
*/

/* 
db.players.find({
    "state": "Georgia",
    "ftp": {
        "$gte": 70
    }
},{
    "_id": 0,
    "first_name": 1,
    "last_name": 1,
    "home_city": 1,
    "ftp": 1
}).pretty()
 */

/* 
 * 7. Which players like fishing and painting (or 2 that will yield a match)
*/

/* 
db.players.find({
    "hobbies": {
        "$all": [
            "Fishing",
            "Writing"
        ]
    }
}).pretty()
 */

/* 
 * 8. Which players have only 2 hobbies
*/

/* 
db.players.find({
    "hobbies": {
        "$size": 2
    }
}).pretty()
 */
