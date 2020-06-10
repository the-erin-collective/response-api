module.exports = (sequelize, Sequelize) => {
    const Response = sequelize.define("response", {
      respondent_id: { // foreign key
        type: Sequelize.UUID,
        primaryKey: true,
        allowNull: false
      },
      panic_id: { // foreign key
        type: Sequelize.UUID,
        primaryKey: true,
        allowNull: false
      },
      response_start_time: { 
        type: Sequelize.DATE,
        allowNull: false
      }
    });
    return Response;
  };