const db = require("../models");
const PanicRequest = db.PanicRequest;
const Op = db.Sequelize.Op;
const { v4: uuidv4 } = require('uuid');


// create and save a new panic request
exports.create = (req, res) => {
  // validate request
  if (!req.body.requester_id || !req.body.geolat || !req.body.geolong ) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // create a panic request
  const panic_request = {
    panic_id: uuidv4(),
    geolat: req.body.geolong,
    geolong: req.body.geolat,
    requester_id: req.body.requester_id,
    request_time: Date.now(),
    resolved_time:null,
    response_id: null
  };

  // save panic request in the database
  PanicRequest.create(panic_request)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "error occurred while creating the panic request."
      });
    });
};

// retrieve all panic requests from the database.
exports.findAll = (req, res) => {
  PanicRequest.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message ||  "error occurred while retrieving panic requests."
      });
    });
};


// find a single panic request by the id in the request
exports.findAllByName = (req, res) => {
  const name = req.query.name;
  var condition = name ? { [Op.or]: [ { short_name: { [Op.iLike]: `%${name}%` } }, { full_name: { [Op.iLike]: `%${name}%` } } ] } : null;
  Requester.findAll({ where : condition})
    .then(data => {
       //  data...
        var condition = data ? { requester_id: data.requester_id }: null;
        PanicRequest.findAll({ where : condition})
        .then(data => {
             // return data
             res.send(data); 
        })
        .catch(err => {
        res.status(500).send({
            message:
            err.message ||  "error occurred while retrieving panic requests."
        });
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message ||  "error occurred while retrieving panic requests."
      });
    });
};

// find a single panic request by the id in the request
exports.findOne = (req, res) => {
    PanicRequest.findByPk(req.body)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message ||  "error occurred while retrieving panic request."
      });
    });
};

// delete a single panic request by the id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    PanicRequest.destroy({
      where: { panic_id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "panic request was deleted successfully"
          });
        } else {
          res.send({
            message: `request with id=${id} was not able to be deleted`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "error deleting request with id=" + id
        });
      });
};

// update a panic request by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;
    PanicRequest.update(req.body, {
        where: { panic_id: id }
    })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "request was updated successfully."
        });
      } else {
        res.send({
          message: `request with id=${id} was not able to be updated`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "error updating request with id=" + id
      });
    });
};

// find all unresponded panic requests
exports.findAllUnresponded = (req, res) => {
    PanicRequest.findAll({ where : { response_id: null }})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message ||  "error occurred while retrieving panic requests."
      });
    });
};