// creates an Attendee model and
// adds validation to the model
module.exports = function (sequelize, DataTypes) {
    var Attendee = sequelize.define("attendee", {
        // giving the Attendee model a name of type STRING
        first_name: {
            type: DataTypes.STRING,
            allowNull: false,
            // the Attendee's first name cannot be null
            validate: {
                len: [1, 50]
            }
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false,
            // the Attendee's last name cannot be null
            validate: {
                len: [1, 50]
            }
        }
    });

    // Customer.associate = function (models) {
    //     // Associating Customers with ice_cream
    //     // When a Customer is deleted, also delete any associated ice_cream
    //     Customer.hasMany(models.ice_cream, {
    //         onDelete: "cascade"
    //     });
    // };

    return Attendee;
};