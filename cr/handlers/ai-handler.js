class AiHandler {
  #nextHandler = null;

  constructor() {
    if (this.constructor === AiHandler) {
      throw new TypeError("Abstract Class");
    }
  }

  setNext(handler) {
    this.#nextHandler = handler;
    return handler;
  }

  async handle(request) {
    if (this.#nextHandler) {
      const result = await this.#nextHandler.handle(request);
      return result;
    }

    return null;
  }
}

module.exports = AiHandler;
