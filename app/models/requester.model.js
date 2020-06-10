module.exports = (sequelize, Sequelize) => {
    const Requester = sequelize.define("requester", {
      requester_id: {
        type: Sequelize.UUID,
        primaryKey: true,
        allowNull: false
      },
      full_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      short_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      cell_number: {
        type: Sequelize.STRING,
        allowNull: false
      },
      account_created: { 
        type: Sequelize.DATE,
        allowNull: false
      }
    });
    return Requester;
  }; 