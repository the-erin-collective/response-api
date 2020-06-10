module.exports = (sequelize, Sequelize) => {
    const Responder = sequelize.define("responder", {
      responder_id: {
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
    return Responder;
  };