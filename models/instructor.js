// creates an Instructor model and adds validation to the model
module.exports = function (sequelize, DataTypes) {
    var Instructor = sequelize.define("Instructor", {
        // giving the Instructor model names of type STRING
        coupleName: {
            type: DataTypes.STRING,
            allowNull: false,
            // the Instructor's names cannot be null
            validate: {
                len: [1, 100]
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

    return Instructor;
};