const db = require("../models");

// Defining methods for the workshopsController
module.exports = {
    // writes the new workshop to the database
    create: function (req, res) {
        db.Workshop
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));

    },
    // finds all the workshops in the database
    findAll: function (req, res) {
        console.log(req.body)
        db.Workshop
            .findAll()
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    // removes workshop from the database
    remove: function (req, res) {
        db.Workshop
            .find({ where: { id: req.params.id } })
            .then(dbModel => dbModel.destroy())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
}