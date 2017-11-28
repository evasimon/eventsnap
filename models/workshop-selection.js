// creates a WorkshopSelection model and
// adds validation to the model
module.exports = function (sequelize, DataTypes) {
    var WorkshopSelection = sequelize.define("WorkshopSelection", {
        // giving the WorkshopSelection model a code and a name of type STRING
        checkedIn: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    });

    WorkshopSelection.associate = function (models) {

        WorkshopSelection.belongsTo(models.Workshop, {
            foreignKey: {
                allowNull: false
            }
        });

        WorkshopSelection.belongsTo(models.Attendee, {
            foreignKey: {
                allowNull: false
            },
            onDelete: "cascade"
        });

    };

    return WorkshopSelection;
};