module.exports = (sequelize, Sequelize) => {
    const PanicRequest = sequelize.define("panic_request", {
      panic_id: {
        type: Sequelize.UUID,
        primaryKey: true
      },
      geolat: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      geolong: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      request_time: {
        type: Sequelize.DATE,
        allowNull: false
      },
      requester_id: { // foreign key
        type: Sequelize.UUID,
        allowNull: false
      },
      resolved_time: { 
        type: Sequelize.UUID,
        allowNull: true
      },
      response_id: { // foreign key
        type: Sequelize.UUID,
        allowNull: true
      }
    });
    return PanicRequest;
  };