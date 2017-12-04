const db = require("../models");

// Defining methods for the registrationController
module.exports = {

    update: function (req, res) {
        // console.log(req.params.uuid)
        db
            .Attendee
            .find({
                where: {
                    uuid: req.params.uuid
                }
            })
            .then((attendee) => {
                // console.log(attendee)
                if (!attendee) {
                    console.log('workshop not found')
                    res.json({success: false, error: 'Attendee not found'})
                } else if (attendee.dataValues.registered === false) {
                    console.log(attendee.dataValues.id)
                    db
                        .Attendee
                        .update({
                            registered: 1 // true
                        }, {
                            where: {
                                id: attendee.dataValues.id
                            }
                        })
                        .then(result => res.json({success: true, result: result}))
                } else if (attendee.registered === true) {
                    console.log("you are already registered")
                    res.json({success: false, error: 'Already registered'})
                }
            })
            .catch(err => res.status(422).json(err))
    }
}