import express from "express";
import cors from 'cors'
import getSeoulPopulationData from "./data.js";
const port = 3000;

const app = express();
app.use(cors())
app.get("/", (req, res) => {
  const seoulData = getSeoulPopulationData();
  res.json(seoulData)
});

app.listen(port, () => {
  console.log(`${port}....`);
});
