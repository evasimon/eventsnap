// creates an Attendee model and
// adds validation to the model
module.exports = function (sequelize, DataTypes) {
    var Attendee = sequelize.define("Attendee", {
        // giving the Attendee model a name of type STRING
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
            // the Attendee's first name cannot be null
            validate: {
                len: [1, 50]
            }
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
            // the Attendee's last name cannot be null
            validate: {
                len: [1, 50]
            }
        },
        uuid: {
            // the Attendee's unique identifier
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV1,
            allowNull: false,

        },
        dancerType: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 12]
            }
        }
    });

    Attendee.associate = function (models) {
        // each Attendee belongs to an EventPass
        // sets Room as foreign key constraint
        Attendee.belongsTo(models.PassType, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Attendee;
};