const { GoogleGenerativeAI } = require("@google/generative-ai");

class GerminiAI {
  static #isInternalConstructing = false;
  static #instance = null;
  #genAi = new GoogleGenerativeAI(process.env.GEMINI_AI_API_KEY);

  constructor() {
    if (!GerminiAI.#isInternalConstructing) {
      throw new TypeError("This constructor is private");
    }

    GerminiAI.#isInternalConstructing = false;
  }

  static getInstance() {
    if (!GerminiAI.#instance) {
      GerminiAI.#isInternalConstructing = true;
      GerminiAI.#instance = new GerminiAI();
    }

    return GerminiAI.#instance;
  }

  async textOnlyInput(prompt) {
    const model = this.#genAi.getGenerativeModel({ model: "gemini-pro" });

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    return text;
  }
}

module.exports = GerminiAI;
