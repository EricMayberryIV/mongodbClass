/****************************************************************************
 * Assignment02                                                             *
 * 1/29/2018 12:00pm                                                        *
 *                                                                          *
 * Date      | Reason                          | Developer                  *
 * 1/27/2018 | Original                        | Eric A. Mayberry IV (EAM)  *
 *                                                                          *
 ****************************************************************************/


/********************************************* 
 * !!!!!!!!!!!!!!!!IMPORTANT!!!!!!!!!!!!!!!! *
 *                                           *
 * Script will fail if use is included       *
 * this must be run manually before the      * 
 * rest of the script is run                 *
 *                                           *
 *     use myfamu                            *
 *                                           *
 *********************************************/

// truncates collection
//db.friends.remove({})

// destroys collection
//db.friends.drop()

// creates collection, inserts document into collection
db.friends.insert({
    "name": {
        "first": "Jacob",
        "last": "Thomas"
    },
    "major": "Bachelor of Science in Industrial and Manufacturing Engineering",
    "hobbies": [
        "Drawing",
        "Cooking",
        "Gaming"
    ]
})

// inserts document into collection
db.friends.insert({
    "name": {
        "first": "David",
        "last": "Stellar"
    },
    "major": "Bachelor of Science in Environmental Sciences",
    "hobbies": [
        "Hiking",
        "Camping",
        "Rock Climbing"
    ]
})

// inserts document into collection
db.friends.insert({
    "name": {
        "first": "Alanna",
        "last": "Leyton"
    },
    "major": "Bachelor of Science in Public Relations",
    "hobbies": [
        "Singing",
        "Playing Guitar",
        "Event Planning"
    ]
})

// inserts document into collection
db.friends.insert({
    "name": {
        "first": "Erica",
        "last": "Goeke"
    },
    "major": "Bachelor of Science in Mathematics Education",
    "hobbies": [
        "Shooting",
        "Fishing",
        "Camping"
    ]
})

// displays all records

    //db.friends.find().pretty()

/********************************************* 
 * !!!!!!!!!!!!!!!!IMPORTANT!!!!!!!!!!!!!!!! *
 *                                           *
 * Query will not display records when use   *
 * in a script. This must be run manually.   *
 *                                           *
 *     db.friends.find().pretty()            *
 *                                           *
 *********************************************/
