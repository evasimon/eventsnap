const db = require("../models");

// Defining methods for the workshopsController
module.exports = {
    // finds all the workshops in the database
    findAll: function (req, res) {
        db.Workshop
            .findAll({ include: [{ model: db.Instructor }]})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    // finds One workshop in the database & includes Instructor
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
                // finds all class selections for that workshop & includes Attendees
                db.WorkshopSelection
                    .findAll({
                        where: {
                            WorkshopId: req.params.id
                        },
                        include: [db.Attendee]
                    })
                    .then(result => {
                        res.json({ workshop, result })
                    })
            })
            .catch(err => res.status(422).json(err));
    }
}