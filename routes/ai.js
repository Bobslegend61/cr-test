const express = require("express");
const AiController = require("../controllers/ai");
class AiRoutes {
  router = express.Router();

  constructor() {
    const aiController = new AiController();
    this.router.route("/pro").post(aiController.pro);
    this.router.route("/pro-vision").post();
  }
}
module.exports = AiRoutes;
