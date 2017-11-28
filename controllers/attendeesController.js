const db = require("../models");

// Defining methods for the attendeeController
module.exports = {
    // writes the new attendee to the database
    create: function (req, res) {
        db.Attendee
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));

    },
    // finds all the attendees in the database
    findAll: function (req, res) {
        db.Attendee
            .findAll(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    // removes attendee from the database
    remove: function (req, res) {
        db.Attendee
            .find({ where: {id: req.params.id }})
            .then(dbModel => dbModel.destroy())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
}