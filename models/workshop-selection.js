// creates a WorkshopSelection model and adds validation to the model
module.exports = function (sequelize, DataTypes) {
    var WorkshopSelection = sequelize.define("WorkshopSelection", {
        // giving the WorkshopSelection model a code and a name of type STRING
        checkedIn: {
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

    WorkshopSelection.associate = function (models) {
        // each WorkshopSelection belongs to a Workshop/ sets Workshop as foreign key constraint
        WorkshopSelection.belongsTo(models.Workshop, {
            foreignKey: {
                allowNull: false
            },
            onDelete: "cascade"

        });
        // each WorkshopSelection belongs to a Attendee/ sets Attendee as foreign key constraint
        WorkshopSelection.belongsTo(models.Attendee, {
            foreignKey: {
                allowNull: false
            },
            onDelete: "cascade"
        });

    };

    return WorkshopSelection;
};