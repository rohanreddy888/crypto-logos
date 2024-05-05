const express = require("express");

const app = express();
const PORT = 8000;

app.get("/", (req, res) => {
  res.json({
    test: "Test",
  });
});

app.listen(PORT, () => {
  console.log(`Listening on PORT:${PORT}`);
});
