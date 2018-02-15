//db.courses.remove()

db.courses.insert({
    "course": {
        "prefix": "COP",
        "number": 4710,
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
        "number": 4064,
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
        "number": 1101,
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
        "number": 4504,
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
        "number": 4250,
        "title": "Ethics",
        "days": [
            "Tuesday",
            "Thursday"
        ],
        "credit_hours": 3
    },
    "instructor": "Harmon"
})


/*
   1.  db.courses.find({"course.prefix":"COP"}).sort({instructor:1}).pretty()
   2.  db.courses.find({"course.days":{$all:["Monday","Wednesday","Friday"]}}).pretty()
   3.  db.courses.find({"course.days":["Monday"]}).pretty()
   4.  db.courses.find({instructor:"Smith"},{_id:0,"course.title":1,"course.credit_hours":1}).pretty()
   5.  db.courses.find({"course.title":"Advance Database"}).pretty()
   6.  db.courses.find({}).sort({"course.title":1}).limit(4).pretty()
   7.  db.courses.find({"course.days":["Tuesday", "Thursday"], "course.credit_hours":{$gt:2}},{_id:0,instructor:1,"course.title":1}).pretty()
*/