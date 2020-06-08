module.exports = (sequelize, Sequelize) => {
    const PanicRequest = sequelize.define("panic_request", {
      panic_id: {
        type: Sequelize.id
      },
      gelat: {
        type: Sequelize.float
      },
      gelong: {
        type: Sequelize.float
      },
      request_time: {
        type: Sequelize.datetime
      },
      requester_id: { // foreign key
        type: Sequelize.id
      },
      resolved_time: { // nullable
        type: Sequelize.id
      },
      response_id: { // nullable, foreign key
        type: Sequelize.id
      }
    });
    return PanicRequest;
  };