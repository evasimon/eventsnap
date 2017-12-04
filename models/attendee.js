// creates an Attendee model and adds validation to the model
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
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            // the Attendee's last name cannot be null
            validate: {
                len: [1, 50]
            }
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false,
            // the Attendee's last name cannot be null
            validate: {
                len: [1, 50]
            }
        },
        state: {
            type: DataTypes.STRING,
            allowNull: false,
            // the Attendee's last name cannot be null
            validate: {
                len: [1, 50]
            }
        },
        uuid: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV1,
            allowNull: false
        },
        dancerType: {
            // the Attendee's dancerType: Lead or Follower
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 12]
            }
        },
        emailSent: {
            type: DataTypes.BOOLEAN,
            defaultValue: false

        },
        formCompleted: {
            type: DataTypes.BOOLEAN,
            defaultValue: false

        },
        badgePrinted: {
            type: DataTypes.BOOLEAN,
            defaultValue: false

        },
        registered: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: sequelize.fn('NOW')
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: sequelize.fn('NOW')
        }
    });

    Attendee.associate = function (models) {
        // each Attendee belongs to a PassType sets PassType as foreign key constraint
        Attendee.belongsTo(models.PassType, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Attendee;
};