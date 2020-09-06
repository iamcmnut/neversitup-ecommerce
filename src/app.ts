import express from "express";
import bodyParser from "body-parser";

import { mainController } from "./controllers";

const app = express();

app.set("port", process.env.PORT || 3000);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Set route for your controller here
app.get("/", mainController.index);

export default app;