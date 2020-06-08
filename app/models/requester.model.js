module.exports = (sequelize, Sequelize) => {
    const Requester = sequelize.define("requester", {
      requester_id: {
        type: Sequelize.id
      },
      full_name: {
        type: Sequelize.string
      },
      short_name: {
        type: Sequelize.string
      },
      cell_number: {
        type: Sequelize.string
      },
      account_created: { 
        type: Sequelize.datetime
      }
    });
    return Requester;
  }; 