const OpenAI = require("openai");

class OpenAi {
  static #isInternalConstructing = false;
  static #instance = null;
  #openAi = new OpenAI({
    apiKey: process.env.OPEN_AI_API_KEY,
  });

  constructor() {
    if (!OpenAi.#isInternalConstructing) {
      throw new TypeError("Private Constructor");
    }

    OpenAi.#isInternalConstructing = false;
  }

  static getInstance() {
    if (!OpenAi.#instance) {
      OpenAi.#isInternalConstructing = true;
      OpenAi.#instance = new OpenAi();
    }

    return OpenAi.#instance;
  }

  async textOnlyInput(prompt) {
    const completion = await this.#openAi.chat.completions.create({
      messages: [{ role: "user", content: prompt }],
      model: "gpt-3.5-turbo",
    });

    return completion.choices[0];
  }
}

module.exports = OpenAi;
