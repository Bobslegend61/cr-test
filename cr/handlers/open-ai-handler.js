const AIEnum = require("../../enums/ai-enum");
const OpenAi = require("../singleton/open-ai");
const AiHandler = require("./ai-handler");

class OpenAiHandler extends AiHandler {
  async handle(request) {
    if (request.ai === AIEnum.OPEN_AI) {
      const ai = OpenAi.getInstance();
      const result = await ai.textOnlyInput(request.prompt);
      return result;
    }

    return super.handle(request);
  }
}

module.exports = OpenAiHandler;
