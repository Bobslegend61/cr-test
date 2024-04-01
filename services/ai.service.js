class AiService {
  static #isInternalConstructing = false;
  static #instance = null;
  #handler = null;

  constructor(handler) {
    if (!AiService.#isInternalConstructing) {
      throw new TypeError("Private Constructor");
    }
    this.#handler = handler;
    AiService.#isInternalConstructing = false;
  }

  static getInstance(handler) {
    if (!AiService.#instance) {
      AiService.#isInternalConstructing = true;
      AiService.#instance = new AiService(handler);
    }

    return AiService.#instance;
  }

  async handleTextOnlyInput(request) {
    const response = await this.#handler.handle(request);
    return response;
  }
}

module.exports = AiService;
