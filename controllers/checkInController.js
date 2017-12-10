const db = require("../models");

// Defining methods for the checkInController
module.exports = {
    // updates one attendee when checking in
    update: (req, res) => {
        // console.log(req.params.uuid)
        db.Attendee
            .find({
                where: {
                    uuid: req.params.uuid
                }
            })
            .then((attendee) => {
                if (!attendee) {
                    res.status(404).json('Attendee not found')
                }
                db.WorkshopSelection
                    // finds one attendee with one workshop selection
                    .find({
                        where: {
                            AttendeeId: attendee.id,
                            WorkshopId: req.params.id
                        }
                    })
                    .then((workshop) => {
                        if (workshop && workshop.checkedIn === false) {
                            db.WorkshopSelection
                                .update({
                                    checkedIn: 1 // true
                                }, {
                                    where: {
                                        AttendeeId: attendee.id,
                                        WorkshopId: req.params.id
                                    }
                                })
                                .then(result => res.json({success: true, result: result}))
                        } else if (!workshop) {
                            res.json({success: false, error: 'Workshop Selection Not Found!'})
                        } else {
                            res.json({success: false, error: 'Already Checked-in!'})
                        }
                    })
            })
            .catch(err => res.status(422).json(err));
    }
}