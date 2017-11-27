// creates an Instructor model and
// adds validation to the model
module.exports = function (sequelize, DataTypes) {
    var Instructor = sequelize.define("Instructor", {
        // giving the Instructor model a name of type STRING
        first_name: {
            type: DataTypes.STRING,
            allowNull: false,
            // the Instructor's first name cannot be null
            validate: {
                len: [1, 50]
            }
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false,
            // the Instructor's last name cannot be null
            validate: {
                len: [1, 50]
            }
        }
    });

    return Instructor;
};