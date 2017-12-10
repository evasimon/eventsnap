const db = require("../models");

// Defining methods for the registrationController
module.exports = {
    // updates one attendee when registering
    update: function (req, res) {
        db.Attendee
            // find one attendee
            .find({
                where: {
                    uuid: req.params.uuid
                }
            })
            .then((attendee) => {
                if (!attendee) {
                    console.log('workshop not found')
                    res.json({success: false, error: 'Attendee not found'})
                } else if (attendee.dataValues.registered === false) {
                    console.log(attendee.dataValues.id)
                    db.Attendee
                        .update({
                            registered: 1 // true
                        }, {
                            where: {
                                id: attendee.dataValues.id
                            }
                        })
                        .then(result => res.json({success: true, result: result}))
                } else if (attendee.registered === true) {
                    console.log("You are already registered")
                    res.json({success: false, error: 'Already Registered!'})
                }
            })
            .catch(err => res.status(422).json(err))
    }
}