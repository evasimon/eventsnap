// creates a Room model and adds validation to the model
module.exports = function (sequelize, DataTypes) {
    var Room = sequelize.define("Room", {
        // giving the Room model a name of type STRING
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            // the Room's name cannot be null
            validate: {
                len: [1, 12]
            }
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

    return Room;
};