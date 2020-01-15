const routes = require("express").Router();
const devController = require("./controller/devController");
const searchController = require("./controller/searchController")

routes.get("/devs", devController.index);
routes.post("/devs", devController.store);

routes.get('/search', searchController.index);

module.exports = routes;
