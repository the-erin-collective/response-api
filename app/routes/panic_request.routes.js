module.exports = app => {
    const panicRquests = require("../controllers/panic_request.controller.js");
  
    var router = require("express").Router();
  
    // add new panic request
    router.post("/", panicRquests.create);
  
    // get all panic requests
    router.get("/", panicRquests.findAll);
  
    // find all unresponded panic requests
   router.get("/active", panicRquests.findAllUnresponded);
  
    // get panic request by id
    router.get("/:id", panicRquests.findOne);
  
    // update panic request by id
    router.put("/:id", panicRquests.update);

    // find all panic requests which contains the specified requester name
    router.get("/requester", panicRquests.findAllByName);
  
    // not implemented - delete panic request by id
    router.delete("/:id", panicRquests.delete);
  
    app.use('/api/panic_request', router);
  };