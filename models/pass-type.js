// creates a PassType model and adds validation to the model
module.exports = function (sequelize, DataTypes) {
    var PassType = sequelize.define("PassType", {
        // giving the PassType model a code and a name of type STRING
        code: {
            type: DataTypes.STRING,
            allowNull: false,
            // the PassType's code cannot be null
            validate: {
                len: [1, 12]
            }
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            // the PassType's name cannot be null
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

    return PassType;
};