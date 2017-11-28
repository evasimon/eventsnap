// creates a Workshop model and
// adds validation to the model
module.exports = function (sequelize, DataTypes) {
    var Workshop = sequelize.define("Workshop", {
        // giving the Workshop model a code and title of type STRING
        code: {
            type: DataTypes.STRING,
            allowNull: false,
            // the Workshop's code cannot be null
            validate: {
                len: [1, 12]
            }
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            // the Workshop's title cannot be null
            validate: {
                len: [1, 255]
            }
        }
    });

    Workshop.associate = function (models) {
        // each Workshop belongs to a Instructor
        // sets Instructor as foreign key constraint
        Workshop.belongsTo(models.Instructor, {
            foreignKey: {
                allowNull: false
            }
        });
        // each Workshop belongs to a Room
        // sets Room as foreign key constraint
        Workshop.belongsTo(models.Room, {
            foreignKey: {
                allowNull: false
            }
        });

    };

    return Workshop;
};