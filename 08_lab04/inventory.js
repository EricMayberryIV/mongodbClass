/****************************************************************************
 * Lab04                                                                    *
 * 02/12/2018 07:30pm                                                       *
 *                                                                          *
 * Date       | Reason                          | Developer                 *
 * 02/12/2018 | Original                        | Eric A. Mayberry IV (EAM) *
 *                                                                          *
 ****************************************************************************/

//db.inventory.remove()

db.inventory.insert({
        "name": "hotdogs",
        "type": "meat",
        "upc": 1234542855854,
        "count": 4,
        "vendors": [
            "publix",
            "oscar meyer"
        ],
        "aisle": "back wall",
        "last_stocked": [
            {
                "name": "david",
                "date": new Date(),
                "notes": "running low"
            },
            {
                "name": "john",
                "date": new Date(),
                "notes": "sale this week, need to prepare"
            },
            {
                "name": "don",
                "date": new Date(),
                "notes": "busted packages"
            }
        ]
    }
)

db.inventory.insert({
        "name": "dish soap",
        "type": "cleaning supply",
        "upc": 5773992003756,
        "count": 8,
        "vendors": [
            "tide",
            "clorox"
        ],
        "aisle": "5",
        "last_stocked": [
            {
                "name": "john",
                "date": new Date(),
                "notes": "fully stocked"
            },
            {
                "name": "david",
                "date": new Date(),
                "notes": "broken bottle, replaced and filled shelf"
            },
            {
                "name": "don",
                "date": new Date(),
                "notes": "stocked"
            }
        ]
    }
)

db.inventory.insert({
        "name": "sugar",
        "type": "baking",
        "upc": 4883652743921,
        "count": 3,
        "vendors": [
            "dixie",
            "publix"
        ],
        "aisle": "12",
        "last_stocked": [
            {
                "name": "don",
                "date": new Date(),
                "notes": "broken bags, restocked"
            },
            {
                "name": "liz",
                "date": new Date(),
                "notes": "straightened and filled shelf"
            },
            {
                "name": "john",
                "date": new Date(),
                "notes": "fully stocked"
            }
        ]
    }
)

db.inventory.insert({
        "name": "pineapple slices",
        "type": "produce",
        "upc": 2845930234821,
        "count": 4,
        "vendors": [
            "rebecca's farm",
            "chickita"
        ],
        "aisle": "3",
        "last_stocked": [
            {
                "name": "liz",
                "date": new Date(),
                "notes": "straightened, cleaned, and restocked"
            },
            {
                "name": "john",
                "date": new Date(),
                "notes": "fully stocked"
            },
            {
                "name": "david",
                "date": new Date(),
                "notes": "organized shelf"
            }
        ]
    }
)

db.inventory.insert({
        "name": "green beans",
        "type": "canned vegetables",
        "upc": 5784934587345,
        "count": 16,
        "vendors": [
            "publix",
            "dixie veggies"
        ],
        "aisle": "2",
        "last_stocked": [
            {
                "name": "liz",
                "date": new Date(),
                "notes": "running low, restocked"
            },
            {
                "name": "john",
                "date": new Date(),
                "notes": "dented cans, removed bad stock"
            },
            {
                "name": "david",
                "date": new Date(),
                "notes": "fully stocked"
            }
        ]
    }
)

db.inventory.insert({
        "name": "frozen tater tots",
        "type": "frozen foods",
        "upc": 8467578493673,
        "count": 5,
        "vendors": [
            "publix",
            "ore-ida"
        ],
        "aisle": "8",
        "last_stocked": [
            {
                "name": "liz",
                "date": new Date(),
                "notes": "restocked"
            },
            {
                "name": "john",
                "date": new Date(),
                "notes": "ripped bags, removed bad stock"
            },
            {
                "name": "don",
                "date": new Date(),
                "notes": "fully stocked"
            }
        ]
    }
)


//Add a vendor for an product.

//db.inventory.update({"name":"sugar"},{"$push":{"vendors":"southern sweets"}})

//Add 3 vendors for an product (with one update)

//db.inventory.update({"name":"frozen tater tots"},{"$push":{"vendors":{"$each":["idaho kings","potato nation","spinning spuds"]}}})

//Decrease the number of items in stock for a product by 5

//db.inventory.update({"name":"dish soap"},{"$inc":{"count":-5}})

//Change the number of items in stock for a product to 20

//db.inventory.update({"name":"hotdogs"},{"$set":{"count":5}})

//Change where a product is located in the store.

//db.inventory.update({"name":"dish soap"},{"$set":{"aisle":7}})

//Add a new stocker for a product

//db.inventory.update({"name":"green beans"},{"$push":{"last_stocked":{"name":"jess","date":new Date(),"notes":"fully stocked"}}})

//Change the comments made by a stocker when he/she stocked the product.

//db.inventory.update({"name":"hotdogs"},{"$set":{"last_stocked.2.notes": "updated - swept floor"}})

//Remove the vendors for a product (remove the key)

//db.inventory.update({"name":"hotdogs"},{"$pull" : {"vendors" : "publix"}})

//Show all products that were stocked by a particular stocker (show product and number of items in stock only)

//db.inventory.find({"last_stocked.name":"john"},{_id:0, "name":1, "count":1}).pretty()

//Show all products that had a stocker who made a comment that included the word "clean". 

//db.inventory.find({"last_stocked.notes":{"$regex":/clean/i}},{_id:0}).pretty()

//Show all products where the number of items is less than 5

//db.inventory.find({"count":{"$lt":5}},{_id:0}).pretty()

//Show all products that are not in Aisle 2.

//db.inventory.find({"aisle":{"$not":/2/}},{_id:0}).pretty()