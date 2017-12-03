const db = require("../models");

// Defining methods for the workshopsController
module.exports = {
    // finds all the workshops in the database
    findAll: function (req, res) {
        console.log(req.body)
        db.Workshop
            .findAll()
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    // removes workshop from the database
    findWorkshop: function (req, res) {
        // console.log('entered here')
        db.Workshop
            .findOne({
                include: [{model: db.Instructor}],
                where:
                    {
                        id: req.params.id
                    }
            })
            .then(workshop => {
                // console.log(workshop)
                db.WorkshopSelection
                    .findAll({
                        where: {
                            WorkshopId: req.params.id
                        },
                        include: [db.Attendee]
                    })
                    .then(result => {
                        console.log(result)
                        res.json({ workshop, result })
                    })
            })
            .catch(err => res.status(422).json(err));
    }
}