const GerminiAiHandler = require("../cr/handlers/germini-ai-handler");
const AiService = require("../services/ai.service");

class AiController {
  async pro(req, res, next) {
    try {
      const germiniAiHandler = new GerminiAiHandler();
      const aiService = AiService.getInstance(germiniAiHandler);
      const response = await aiService.handleTextOnlyInput(req.body);
      console.log(req.body);
      res.status(200).json({ response });
    } catch (error) {
      next(error);
    }
  }
}
module.exports = AiController;
