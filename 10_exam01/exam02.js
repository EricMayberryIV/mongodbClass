db.basketballgame.insert(
    {
        venue: "arena",
        hometeam:
            {
                name: "rockets",
                fouls: 2,
                score: 85,
                scoreByQuarter: [20, 25, 20, 20]
            },
        awayteam:
            {
                name: "jazz",
                fouls: 1,
                score: 65,
                scoreByQuarter: [15, 20, 10, 20]
            }
    })

db.basketballgame.insert(
    {
        venue: "gymnasium",
        hometeam:
            {
                name: "leon high",
                fouls: 1,
                score: 75,
                scoreByQuarter: [20, 15, 20, 20]
            },
        awayteam:
            {
                name: "wakulla high",
                fouls: 3,
                score: 45,
                scoreByQuarter: [15, 10, 10, 10]
            }
    })

db.basketballgame.insert(
    {
        venue: "gymnasium",
        hometeam:
            {
                name: "florida high",
                fouls: 3,
                score: 55,
                scoreByQuarter: [20, 15, 10, 10]
            },
        awayteam:
            {
                name: "famu drs",
                fouls: 1,
                score: 95,
                scoreByQuarter: [25, 20, 30, 20]
            }
    })

db.basketballgame.insert(
    {
        venue: "arena",
        hometeam:
            {
                name: "lakers",
                fouls: 2,
                score: 57,
                scoreByQuarter: [30, 27]
            },
        awayteam:
            {
                name: "bulls",
                fouls: 3,
                score: 55,
                scoreByQuarter: [35, 20]
            }
    })

/*

Find the game when Lakers played Bulls. Show only Laker's Fouls.

    db.basketballgame.find({"hometeam.name":"lakers", "awayteam.name":"bulls"},{_id:0,"hometeam.fouls":1})

Assuming only 2 quarters have been played so far in the game Lakers vs. Bulls,
update the scoring by quarter list by adding 10 points for the 3rd quarter for Bulls.

    db.basketballgame.update({"hometeam.name":"lakers", "awayteam.name":"bulls"},{$push:{"hometeam.scoreByQuarter":10},$inc:{"hometeam.score":10}})


Add 1 to the number of fouls for Florida High in their game against FAMU DRS.

    db.basketballgame.update({"hometeam.name":"florida high"},{$inc:{"hometeam.fouls":1}})

 */
