const db = require("../models");

// Defining methods for the attendeeController
module.exports = {

    update: function (req, res) {
        // console.log(req.params.uuid)
        db.Attendee
            .find({ where: { uuid: req.params.uuid } })
            .then((attendee) => {
                if (!attendee) {
                    res.status(404).json('Attendee not found')
                }
                db.WorkshopSelection
                    .find({
                        where: {
                            AttendeeId: attendee.id,
                            WorkshopId: req.params.id
                        }
                    })
                    .then((workshop) => {
                        if (workshop && workshop.checkedIn === false) {
                            console.log('workshop.checkedIn is false')
                            db.WorkshopSelection
                                .update({
                                    checkedIn: 1 // true
                                }, {
                                    where: {
                                        AttendeeId: attendee.id,
                                        WorkshopId: req.params.id
                                    }
                                })
                                .then(result => res.json({ success: true, result: result }))

                        } else if (!workshop) {
                            console.log('workshop not found')
                            res.json({ success: false, error: 'workshop selection not found' })
                            // res.status(404).send('workshop selection not found');
                        } else {
                            console.log("you are already checked in")
                            res.json({ success: false, error: 'already checked-in' })

                            // res.status(400).send('already checked-in')
                        }
                    })
            })
            .catch(err => res.status(422).json(err));
    }
}