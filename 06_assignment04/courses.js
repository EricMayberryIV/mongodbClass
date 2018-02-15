/****************************************************************************
 * Assignment04                                                             *
 * 02/12/2018 12:30pm                                                       *
 *                                                                          *
 * Date       | Reason                          | Developer                 *
 * 02/11/2018 | Original                        | Eric A. Mayberry IV (EAM) *
 *                                                                          *
 ****************************************************************************/

//db.courses.remove({})

db.courses.insert({
    "course": {
        "prefix": "COP",
        "number": "4710",
        "title": "Advance Database",
        "days": [
            "Monday"
        ],
        "credit_hours": 3
    },
    "instructor": "Allen"
})

db.courses.insert({
    "course": {
        "prefix": "CAP",
        "number": "4064",
        "title": "Network-Based Multimedia",
        "days": [
            "Tuesday",
            "Thursday"
        ],
        "credit_hours": 3
    },
    "instructor": "Nowicki"
})

db.courses.insert({
    "course": {
        "prefix": "ENC",
        "number": "1101",
        "title": "Writing",
        "days": [
            "Monday"
        ],
        "credit_hours": 3
    },
    "instructor": "Smith"
})


db.courses.insert({
    "course": {
        "prefix": "CNT",
        "number": "4504",
        "title": "Networking",
        "days": [
            "Monday",
            "Wednesday",
            "Friday"
        ],
        "credit_hours": 3
    },
    "instructor": "Davis"
})

db.courses.insert({
    "course": {
        "prefix": "CIS",
        "number": "4250",
        "title": "Ethics",
        "days": [
            "Tuesday",
            "Thursday"
        ],
        "credit_hours": 3
    },
    "instructor": "Harmon"
})

/*  Find all course numbers that start with 1 (Use 1 or test it out with
    something that generates matches and something that does not). Sort
    the documents
*/

    //db.courses.find({"course.number":{"$regex":/^1/}},{"_id":0}).pretty()

/*  Find all courses that are not COP (Use COP or some other values to test).
    Show the instructor and course name only.
*/

    //db.courses.find({"course.prefix":{"$regex":/[^COP]/}},{"_id":0,"course.title":1,"instructor":1}).pretty()

/*  Find all courses where the instructor's name begins with "smi" (Use "smi"
    or some other values to test)
*/

    //db.courses.find({"instructor":{"$regex":/^smi/i}},{"_id":0}).pretty()