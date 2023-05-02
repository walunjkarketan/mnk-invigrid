module.exports = (sequelize, Sequelize) => {
    const File = sequelize.define("file", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: Sequelize.STRING
        },
        original_name: {
            type: Sequelize.STRING
        },
        size: {
            type: Sequelize.STRING
        }

    });

    return File;
};