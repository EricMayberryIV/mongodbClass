db.people.insert({
    firstname: "becky",
    lastname: "jones",
    hobbies: ["sewing",
        "painting",
        "running"],
    quote: "I think therefore I am"
});

db.people.insert({
    firstname: "david",
    lastname: "beckham",
    hobbies: ["dancing",
        "soccer",
        "running"],
    quote: "life is 10% what happens to you and 90% how you react to it"
});

db.people.insert({
    firstname: "johnny",
    lastname: "appleseed",
    hobbies: ["gardening",
        "walking",
        "bowling"],
    quote: "always do your best. What you plant now, you will harvest later"
});

db.people.insert({
    firstname: "donald",
    lastname: "drumpf",
    hobbies: ["whining",
        "pouting",
        "throwing tantrums"],
    quote: "I don't think therefore I have no idea about anything."
});

// Who likes sewing?

    // db.people.find({hobbies : {$in:["sewing"]}},{_id:0}).pretty();

// Who has a favorite quote that contains the word "love"?

    // db.people.find({quote: {$regex:/love/i}},{_id:0}).pretty()

// Remove bowling from someone's hobbies

    // db.people.update({"firstname":"johnny", "lastname":"appleseed"},{$pop:{hobbies:1}})
