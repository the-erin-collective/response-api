module.exports = (sequelize, Sequelize) => {
    const Response = sequelize.define("response", {
      respondent_id: { // foreign key
        type: Sequelize.id
      },
      panic_id: { // foreign key
        type: Sequelize.id
      },
      response_start_time: { 
        type: Sequelize.datetime
      }
    });
    return Response;
  };