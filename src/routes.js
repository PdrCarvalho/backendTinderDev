const express = require("express");
const routes = express.Router();
const devController = require("./controllers/DevController");
const likesController = require("./controllers/LikesController");

const dislikesController = require("./controllers/DislikesController");

routes.post("/devs", devController.store);
routes.get("/",devController.findAll);
routes.get("/devs", devController.index);


routes.post("/devs/:devId/likes", likesController.store);
routes.post("/devs/:devId/dislikes", dislikesController.store);
module.exports = routes;
