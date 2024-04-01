const express = require("express");
const cors = require("cors");
const AiRoutes = require("./routes/ai");

const port = process.env.PORT || 3000;

class App {
  #app = express();
  constructor() {
    const aiRoutes = new AiRoutes();
    this.#app.use(cors());
    this.#app.use(express.json());
    this.#app.use("/ai", aiRoutes.router);
    this.#app.use((err, req, res, next) => {
      res.status(500).json({ error: err.message });
    });
  }

  init() {
    this.#app.listen(port, () =>
      console.log(`Server started on port: ${port}`),
    );
  }
}

module.exports = App;
