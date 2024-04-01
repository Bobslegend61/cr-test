const AIEnum = require("../../enums/ai-enum");
const GerminiAI = require("../singleton/germini-ai");
const AiHandler = require("./ai-handler");

class GerminiAiHandler extends AiHandler {
  async handle(request) {
    if (request.ai === AIEnum.GEMINI_AI) {
      const ai = GerminiAI.getInstance();
      const result = await ai.textOnlyInput(request.prompt);
      return result;
    }

    return super.handle(request);
  }
}

module.exports = GerminiAiHandler;
